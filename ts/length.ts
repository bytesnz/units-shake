/**
 * Available units are:
 * - meters (m)
 * - kilometers (km)
 * - millimeters (mm)
 * - miles (mi)
 * - yards (yd)
 * - feet (ft)
 * - feet and inches (f'i")
 * - inches (in)
 * - mils (mil)
 */

/**
 * Converts meters (m) to kilometers (km)
 */
export const lengthmtokm = (value: number): number => value * 0.00100000000;

/**
 * Converts kilometers (km) to meters (m)
 */
export const lengthkmtom = (value: number): number => value * 1000.00000;

/**
 * Converts meters (m) to millimeters (mm)
 */
export const lengthmtomm = (value: number): number => value * 1000.00000;

/**
 * Converts millimeters (mm) to meters (m)
 */
export const lengthmmtom = (value: number): number => value * 0.00100000000;

/**
 * Converts meters (m) to miles (mi)
 */
export const lengthmtomi = (value: number): number => value * 0.000621371190;

/**
 * Converts miles (mi) to meters (m)
 */
export const lengthmitom = (value: number): number => value * 1609.34401;

/**
 * Converts meters (m) to yards (yd)
 */
export const lengthmtoyd = (value: number): number => value * 1.09361330;

/**
 * Converts yards (yd) to meters (m)
 */
export const lengthydtom = (value: number): number => value * 0.914399999;

/**
 * Converts meters (m) to feet (ft)
 */
export const lengthmtoft = (value: number): number => value * 3.28083990;

/**
 * Converts feet (ft) to meters (m)
 */
export const lengthfttom = (value: number): number => value * 0.304800000;

/**
 * Converts meters (m) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
export const lengthmtofi = (value: number): number[] => {
  const portions = [0.333333333, 0.296728967];
  return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};

/**
 * Converts feet and inches (f'i") to meters (m)
 */
export const lengthfitom = (feet:number, inches: number): number => feet * 3 + inches * 3.3700788

/**
 * Converts meters (m) to inches (in)
 */
export const lengthmtoin = (value: number): number => value * 39.3700790;

/**
 * Converts inches (in) to meters (m)
 */
export const lengthintom = (value: number): number => value * 0.0253999998;

/**
 * Converts meters (m) to mils (mil)
 */
export const lengthmtomil = (value: number): number => value * 39370.0790;

/**
 * Converts mils (mil) to meters (m)
 */
export const lengthmiltom = (value: number): number => value * 0.0000253999998;

/**
 * Converts kilometers (km) to millimeters (mm)
 */
export const lengthkmtomm = (value: number): number => value * 1000000.00;

/**
 * Converts millimeters (mm) to kilometers (km)
 */
export const lengthmmtokm = (value: number): number => value * 0.00000100000000;

/**
 * Converts kilometers (km) to miles (mi)
 */
export const lengthkmtomi = (value: number): number => value * 0.621371190;

/**
 * Converts miles (mi) to kilometers (km)
 */
export const lengthmitokm = (value: number): number => value * 1.60934401;

/**
 * Converts kilometers (km) to yards (yd)
 */
export const lengthkmtoyd = (value: number): number => value * 1093.61330;

/**
 * Converts yards (yd) to kilometers (km)
 */
export const lengthydtokm = (value: number): number => value * 0.000914399999;

/**
 * Converts kilometers (km) to feet (ft)
 */
export const lengthkmtoft = (value: number): number => value * 3280.83990;

/**
 * Converts feet (ft) to kilometers (km)
 */
export const lengthfttokm = (value: number): number => value * 0.000304800000;

/**
 * Converts kilometers (km) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
export const lengthkmtofi = (value: number): number[] => {
  const portions = [0.000333333333, 0.000296728967];
  return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};

/**
 * Converts feet and inches (f'i") to kilometers (km)
 */
export const lengthfitokm = (feet:number, inches: number): number => feet * 3000 + inches * 3370.0788

/**
 * Converts kilometers (km) to inches (in)
 */
export const lengthkmtoin = (value: number): number => value * 39370.0790;

/**
 * Converts inches (in) to kilometers (km)
 */
export const lengthintokm = (value: number): number => value * 0.0000253999998;

/**
 * Converts kilometers (km) to mils (mil)
 */
export const lengthkmtomil = (value: number): number => value * 39370079.0;

/**
 * Converts mils (mil) to kilometers (km)
 */
export const lengthmiltokm = (value: number): number => value * 2.53999998e-8;

/**
 * Converts millimeters (mm) to miles (mi)
 */
export const lengthmmtomi = (value: number): number => value * 6.21371190e-7;

/**
 * Converts miles (mi) to millimeters (mm)
 */
export const lengthmitomm = (value: number): number => value * 1609344.01;

/**
 * Converts millimeters (mm) to yards (yd)
 */
export const lengthmmtoyd = (value: number): number => value * 0.00109361330;

/**
 * Converts yards (yd) to millimeters (mm)
 */
export const lengthydtomm = (value: number): number => value * 914.399999;

/**
 * Converts millimeters (mm) to feet (ft)
 */
export const lengthmmtoft = (value: number): number => value * 0.00328083990;

/**
 * Converts feet (ft) to millimeters (mm)
 */
export const lengthfttomm = (value: number): number => value * 304.800000;

/**
 * Converts millimeters (mm) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
export const lengthmmtofi = (value: number): number[] => {
  const portions = [333.333333, 296.728967];
  return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};

/**
 * Converts feet and inches (f'i") to millimeters (mm)
 */
export const lengthfitomm = (feet:number, inches: number): number => feet * 0.003 + inches * 0.0033700787999999997

/**
 * Converts millimeters (mm) to inches (in)
 */
export const lengthmmtoin = (value: number): number => value * 0.0393700790;

/**
 * Converts inches (in) to millimeters (mm)
 */
export const lengthintomm = (value: number): number => value * 25.3999998;

/**
 * Converts millimeters (mm) to mils (mil)
 */
export const lengthmmtomil = (value: number): number => value * 39.3700790;

/**
 * Converts mils (mil) to millimeters (mm)
 */
export const lengthmiltomm = (value: number): number => value * 0.0253999998;

/**
 * Converts miles (mi) to yards (yd)
 */
export const lengthmitoyd = (value: number): number => value * 1760.00001;

/**
 * Converts yards (yd) to miles (mi)
 */
export const lengthydtomi = (value: number): number => value * 0.000568181815;

/**
 * Converts miles (mi) to feet (ft)
 */
export const lengthmitoft = (value: number): number => value * 5280.00003;

/**
 * Converts feet (ft) to miles (mi)
 */
export const lengthfttomi = (value: number): number => value * 0.000189393938;

/**
 * Converts miles (mi) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
export const lengthmitofi = (value: number): number[] => {
  const portions = [0.000207123730, 0.000184378831];
  return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};

/**
 * Converts feet and inches (f'i") to miles (mi)
 */
export const lengthfitomi = (feet:number, inches: number): number => feet * 4828.0320173840055 + inches * 5423.616115835689

/**
 * Converts miles (mi) to inches (in)
 */
export const lengthmitoin = (value: number): number => value * 63360.0006;

/**
 * Converts inches (in) to miles (mi)
 */
export const lengthintomi = (value: number): number => value * 0.0000157828281;

/**
 * Converts miles (mi) to mils (mil)
 */
export const lengthmitomil = (value: number): number => value * 63360000.6;

/**
 * Converts mils (mil) to miles (mi)
 */
export const lengthmiltomi = (value: number): number => value * 1.57828281e-8;

/**
 * Converts yards (yd) to feet (ft)
 */
export const lengthydtoft = (value: number): number => value * 3.00000000;

/**
 * Converts feet (ft) to yards (yd)
 */
export const lengthfttoyd = (value: number): number => value * 0.333333333;

/**
 * Converts yards (yd) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
export const lengthydtofi = (value: number): number[] => {
  const portions = [0.364537767, 0.324506744];
  return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};

/**
 * Converts feet and inches (f'i") to yards (yd)
 */
export const lengthfitoyd = (feet:number, inches: number): number => feet * 2.743199995830336 + inches * 3.081600050035968

/**
 * Converts yards (yd) to inches (in)
 */
export const lengthydtoin = (value: number): number => value * 36.0000002;

/**
 * Converts inches (in) to yards (yd)
 */
export const lengthintoyd = (value: number): number => value * 0.0277777776;

/**
 * Converts yards (yd) to mils (mil)
 */
export const lengthydtomil = (value: number): number => value * 36000.0002;

/**
 * Converts mils (mil) to yards (yd)
 */
export const lengthmiltoyd = (value: number): number => value * 0.0000277777776;

/**
 * Converts feet (ft) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
export const lengthfttofi = (value: number): number[] => {
  const portions = [1.09361330, 0.973520233];
  return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};

/**
 * Converts feet and inches (f'i") to feet (ft)
 */
export const lengthfitoft = (feet:number, inches: number): number => feet * 0.914399998610112 + inches * 1.027200016678656

/**
 * Converts feet (ft) to inches (in)
 */
export const lengthfttoin = (value: number): number => value * 12.0000001;

/**
 * Converts inches (in) to feet (ft)
 */
export const lengthintoft = (value: number): number => value * 0.0833333329;

/**
 * Converts feet (ft) to mils (mil)
 */
export const lengthfttomil = (value: number): number => value * 12000.0001;

/**
 * Converts mils (mil) to feet (ft)
 */
export const lengthmiltoft = (value: number): number => value * 0.0000833333329;

/**
 * Converts feet and inches (f'i") to inches (in)
 */
export const lengthfitoin = (feet:number, inches: number): number => feet * 0.07619999949708 + inches * 0.08560000095504

/**
 * Converts inches (in) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
export const lengthintofi = (value: number): number[] => {
  const portions = [13.1233597, 11.6822429];
  return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};

/**
 * Converts feet and inches (f'i") to mils (mil)
 */
export const lengthfitomil = (feet:number, inches: number): number => feet * 0.00007619999949708001 + inches * 0.00008560000095504

/**
 * Converts mils (mil) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
export const lengthmiltofi = (value: number): number[] => {
  const portions = [13123.3597, 11682.2429];
  return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};

/**
 * Converts inches (in) to mils (mil)
 */
export const lengthintomil = (value: number): number => value * 1000.00000;

/**
 * Converts mils (mil) to inches (in)
 */
export const lengthmiltoin = (value: number): number => value * 0.00100000000;

