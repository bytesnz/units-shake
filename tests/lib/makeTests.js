"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
exports.makeTests = (module, type, values) => {
    let i, j;
    values.forEach((value) => {
        const units = Object.keys(value);
        for (i = 0; i < units.length; i++) {
            const unit1 = units[i];
            for (j = i + 1; j < units.length; j++) {
                const unit2 = units[j];
                const forwardConversionName = `${type}${unit1}to${unit2}`;
                const reverseConversionName = `${type}${unit2}to${unit1}`;
                ava_1.default(`${forwardConversionName} - ${value[unit1]}${unit1} => ${value[unit2]}${unit2}`, (t) => {
                    t.is(typeof module[forwardConversionName], 'function');
                    const result = module[forwardConversionName](value[unit1]);
                    const allowedError = 0.001 * value[unit2];
                    if (Math.abs(result - value[unit2]) < allowedError) {
                        t.pass();
                    }
                    else {
                        t.is(result, value[unit2]);
                    }
                });
                ava_1.default(`${reverseConversionName} - ${value[unit2]}${unit2} => ${value[unit1]}${unit1}`, (t) => {
                    t.is(typeof module[reverseConversionName], 'function');
                    const result = module[reverseConversionName](value[unit2]);
                    const allowedError = 0.001 * value[unit1];
                    if (Math.abs(result - value[unit1]) < allowedError) {
                        t.pass();
                    }
                    else {
                        t.is(result, value[unit1]);
                    }
                });
            }
        }
    });
};
exports.default = exports.makeTests;
