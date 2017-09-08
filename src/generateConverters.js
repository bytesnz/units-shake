const fs = require('fs');
const process = require('process');
const path = require('path');

// The precision for the conversions
const precision = 9;

// Folder to get the conversions from
const folder = path.join(__dirname, 'conversions');

/**
 * Cleans the unit (removes non-alphanumeric characters) for use in the
 * conversion functions name
 *
 * @param unit Unit to create the cleaned unit for
 */
const cleanUnit = (unit) => unit.replace(/[^0-9a-zA-Z]/g, '');

/**
 * Creates the formula for adding units with multple parts together
 *
 * @param unit Unit with multiple parts
 *
 * @returns The formula string
 */
const createMultiAddition = (unit) => unit.label.map((label, index) => `(${label} * ${unit.inOneSi[index]})`.join(' + '));

/**
 * Creates the conversion function and comment for the given units
 *
 * @param conversionType The conversion type
 * @param unit1 The unit converting from
 * @param unit2 The unit converting to
 *
 * @returns The function string
 */
const createFunction = (conversionType, unit1, unit2) => {
  let func = '';
  func += '/**\n';
  func += ` * Converts ${unitLabel(unit1.label)} (${unit1.unit}) to ${unitLabel(unit2.label)} (${unit2.unit})\n`;
  if (unit2.inOneSi instanceof Array) {
    func += ` *\n * @returns [${unit2.label.join(', ')}]\n`;
  }
  func += ' */\n';
  func += `export const ${conversionType}${cleanUnit(unit1.unit)}to${cleanUnit(unit2.unit)} = `;

  if (unit1.inOneSi instanceof Array && unit2.inOneSi instanceof Array) {
    func += `(${unit1.label.join(': number, ')}: number): `;
    func += `number[] => {\n`;
    //TODO func += `[${unit2.label.map(() => 'number').join(', ')}] => {\n`;
    func += `  let value = ${createMultiAddition(unit2)};\n`;
    func += `  const portions = [${unit2.inOneSi.join(', ')}];\n`;
    func += `  return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });\n`
    func += `};`;
  } else if (unit1.inOneSi instanceof Array) {
    func += `(${unit1.label.join(':number, ')}: number): number => `;
    func += unit1.inOneSi.map((value, index) => `${unit1.label[index]} * ${value / unit2.inOneSi}`).join(' + ');
  } else if (unit2.inOneSi instanceof Array) {
    func += `(value: number): number[] => {\n`;
    //TODO func += `(value: number): [${unit2.label.map(() => 'number').join(', ')}] => {\n`;
    func += `  const portions = [${unit2.inOneSi.map((value) => (unit1.inOneSi / value).toPrecision(precision)).join(', ')}];\n`;
    func += `  return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });\n`
    func += `};`;
  } else {
    func += `(value: number): number => value * ${(unit2.inOneSi / unit1.inOneSi).toPrecision(precision)};`;
  }

  func += '\n';

  return func;
};

/**
 * Creates the label for the unit. If the unit has multiple parts, it
 * concantenates them into a nice sentence
 *
 * @param label The units label
 *
 * @returns The string label
 */
const unitLabel = (label) => {
  if (label instanceof Array) {
    let labelString = '';
    let i;
    const length = label.length;

    for (i = 0; i < length - 2; i++) {
      labelString += `${label[i]}, `;
    }

    if (length >= 2) {
      labelString += `${label[length - 2]} and `;
    }

    labelString += `${label[length - 1]}`;

    return labelString;
  } else {
    return label;
  }
};

fs.readdir(folder, {}, (error, files) => {
  if (error) {
    console.error(error);
    return -1;
  }

  files.forEach((file) => {
    if (file.match(/.*\.json$/)) {
      console.log(`Generating from ${file}`);
      const conversion = require(path.join(folder, file));

      // Create script file
      let content = "";

      content += '/**\n';
      content += ' * Available units are:\n';
      content += ` * - ${unitLabel(conversion.siUnit.label)} (${conversion.siUnit.unit})\n`;

      conversion.units.forEach((unit) => {
        content += ` * - ${unitLabel(unit.label)} (${unit.unit})\n`;

        if (unit.inOneSi instanceof Array) {
          if (!(unit.label instanceof Array) || unit.inOneSi.length != unit.label.length) {
            console.error('Multi-dimensional unit must have a multi-dimensional label', unit);
            process.exit(1);
          }
        }
      });

      content += ' */\n\n';

      let i, j;

      const units = [
        {
          inOneSi: 1,
          label: conversion.siUnit.label,
          unit: conversion.siUnit.unit
        },
        ...conversion.units
      ];

      for (i = 0; i < units.length; i++) {
        for (j = i+1; j < units.length; j++) {
          content += `${createFunction(conversion.type, units[i], units[j])}\n`;
          content += `${createFunction(conversion.type, units[j], units[i])}\n`;
        }
      }

      const filename = path.join(__dirname, `../ts/${conversion.type}.ts`);
      fs.writeFile(filename, content, (error) => {
        if (error) {
          console.error(`Error writing ${filename}`);
          console.error(error);
          return;
        }
        console.log(`${filename} written`);
      });

      // Create test file
      content = 'import makeTests from \'./lib/makeTests\'\n';
      
      content += `import * as conversionModule from '../${conversion.type}';\n\n`;

      content += `makeTests(conversionModule, '${conversion.type}', [\n`;

      conversion.testValues.forEach((testValues) => {
        content += '  {\n';
        Object.keys(testValues).forEach((unit) => {
          content += `    ${unit}: ${testValues[unit]},\n`
        });
        content += '  }\n';
      });
      content += ']);\n';

      const testFilename = path.join(__dirname, `../ts/tests/${conversion.type}.tests.ts`);
      fs.writeFile(testFilename, content, (error) => {
        if (error) {
          console.error(`Error writing ${testFilename}`);
          console.error(error);
          return;
        }
        console.log(`${testFilename} written`);
      });
    }
  });
});
