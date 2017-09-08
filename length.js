"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts meters (m) to kilometers (km)
 */
exports.lengthmtokm = (value) => value * 0.00100000000;
/**
 * Converts kilometers (km) to meters (m)
 */
exports.lengthkmtom = (value) => value * 1000.00000;
/**
 * Converts meters (m) to millimeters (mm)
 */
exports.lengthmtomm = (value) => value * 1000.00000;
/**
 * Converts millimeters (mm) to meters (m)
 */
exports.lengthmmtom = (value) => value * 0.00100000000;
/**
 * Converts meters (m) to miles (mi)
 */
exports.lengthmtomi = (value) => value * 0.000621371190;
/**
 * Converts miles (mi) to meters (m)
 */
exports.lengthmitom = (value) => value * 1609.34401;
/**
 * Converts meters (m) to yards (yd)
 */
exports.lengthmtoyd = (value) => value * 1.09361330;
/**
 * Converts yards (yd) to meters (m)
 */
exports.lengthydtom = (value) => value * 0.914399999;
/**
 * Converts meters (m) to feet (ft)
 */
exports.lengthmtoft = (value) => value * 3.28083990;
/**
 * Converts feet (ft) to meters (m)
 */
exports.lengthfttom = (value) => value * 0.304800000;
/**
 * Converts meters (m) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
exports.lengthmtofi = (value) => {
    const portions = [0.333333333, 0.296728967];
    return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};
/**
 * Converts feet and inches (f'i") to meters (m)
 */
exports.lengthfitom = (feet, inches) => feet * 3 + inches * 3.3700788;
/**
 * Converts meters (m) to inches (in)
 */
exports.lengthmtoin = (value) => value * 39.3700790;
/**
 * Converts inches (in) to meters (m)
 */
exports.lengthintom = (value) => value * 0.0253999998;
/**
 * Converts meters (m) to mils (mil)
 */
exports.lengthmtomil = (value) => value * 39370.0790;
/**
 * Converts mils (mil) to meters (m)
 */
exports.lengthmiltom = (value) => value * 0.0000253999998;
/**
 * Converts kilometers (km) to millimeters (mm)
 */
exports.lengthkmtomm = (value) => value * 1000000.00;
/**
 * Converts millimeters (mm) to kilometers (km)
 */
exports.lengthmmtokm = (value) => value * 0.00000100000000;
/**
 * Converts kilometers (km) to miles (mi)
 */
exports.lengthkmtomi = (value) => value * 0.621371190;
/**
 * Converts miles (mi) to kilometers (km)
 */
exports.lengthmitokm = (value) => value * 1.60934401;
/**
 * Converts kilometers (km) to yards (yd)
 */
exports.lengthkmtoyd = (value) => value * 1093.61330;
/**
 * Converts yards (yd) to kilometers (km)
 */
exports.lengthydtokm = (value) => value * 0.000914399999;
/**
 * Converts kilometers (km) to feet (ft)
 */
exports.lengthkmtoft = (value) => value * 3280.83990;
/**
 * Converts feet (ft) to kilometers (km)
 */
exports.lengthfttokm = (value) => value * 0.000304800000;
/**
 * Converts kilometers (km) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
exports.lengthkmtofi = (value) => {
    const portions = [0.000333333333, 0.000296728967];
    return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};
/**
 * Converts feet and inches (f'i") to kilometers (km)
 */
exports.lengthfitokm = (feet, inches) => feet * 3000 + inches * 3370.0788;
/**
 * Converts kilometers (km) to inches (in)
 */
exports.lengthkmtoin = (value) => value * 39370.0790;
/**
 * Converts inches (in) to kilometers (km)
 */
exports.lengthintokm = (value) => value * 0.0000253999998;
/**
 * Converts kilometers (km) to mils (mil)
 */
exports.lengthkmtomil = (value) => value * 39370079.0;
/**
 * Converts mils (mil) to kilometers (km)
 */
exports.lengthmiltokm = (value) => value * 2.53999998e-8;
/**
 * Converts millimeters (mm) to miles (mi)
 */
exports.lengthmmtomi = (value) => value * 6.21371190e-7;
/**
 * Converts miles (mi) to millimeters (mm)
 */
exports.lengthmitomm = (value) => value * 1609344.01;
/**
 * Converts millimeters (mm) to yards (yd)
 */
exports.lengthmmtoyd = (value) => value * 0.00109361330;
/**
 * Converts yards (yd) to millimeters (mm)
 */
exports.lengthydtomm = (value) => value * 914.399999;
/**
 * Converts millimeters (mm) to feet (ft)
 */
exports.lengthmmtoft = (value) => value * 0.00328083990;
/**
 * Converts feet (ft) to millimeters (mm)
 */
exports.lengthfttomm = (value) => value * 304.800000;
/**
 * Converts millimeters (mm) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
exports.lengthmmtofi = (value) => {
    const portions = [333.333333, 296.728967];
    return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};
/**
 * Converts feet and inches (f'i") to millimeters (mm)
 */
exports.lengthfitomm = (feet, inches) => feet * 0.003 + inches * 0.0033700787999999997;
/**
 * Converts millimeters (mm) to inches (in)
 */
exports.lengthmmtoin = (value) => value * 0.0393700790;
/**
 * Converts inches (in) to millimeters (mm)
 */
exports.lengthintomm = (value) => value * 25.3999998;
/**
 * Converts millimeters (mm) to mils (mil)
 */
exports.lengthmmtomil = (value) => value * 39.3700790;
/**
 * Converts mils (mil) to millimeters (mm)
 */
exports.lengthmiltomm = (value) => value * 0.0253999998;
/**
 * Converts miles (mi) to yards (yd)
 */
exports.lengthmitoyd = (value) => value * 1760.00001;
/**
 * Converts yards (yd) to miles (mi)
 */
exports.lengthydtomi = (value) => value * 0.000568181815;
/**
 * Converts miles (mi) to feet (ft)
 */
exports.lengthmitoft = (value) => value * 5280.00003;
/**
 * Converts feet (ft) to miles (mi)
 */
exports.lengthfttomi = (value) => value * 0.000189393938;
/**
 * Converts miles (mi) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
exports.lengthmitofi = (value) => {
    const portions = [0.000207123730, 0.000184378831];
    return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};
/**
 * Converts feet and inches (f'i") to miles (mi)
 */
exports.lengthfitomi = (feet, inches) => feet * 4828.0320173840055 + inches * 5423.616115835689;
/**
 * Converts miles (mi) to inches (in)
 */
exports.lengthmitoin = (value) => value * 63360.0006;
/**
 * Converts inches (in) to miles (mi)
 */
exports.lengthintomi = (value) => value * 0.0000157828281;
/**
 * Converts miles (mi) to mils (mil)
 */
exports.lengthmitomil = (value) => value * 63360000.6;
/**
 * Converts mils (mil) to miles (mi)
 */
exports.lengthmiltomi = (value) => value * 1.57828281e-8;
/**
 * Converts yards (yd) to feet (ft)
 */
exports.lengthydtoft = (value) => value * 3.00000000;
/**
 * Converts feet (ft) to yards (yd)
 */
exports.lengthfttoyd = (value) => value * 0.333333333;
/**
 * Converts yards (yd) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
exports.lengthydtofi = (value) => {
    const portions = [0.364537767, 0.324506744];
    return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};
/**
 * Converts feet and inches (f'i") to yards (yd)
 */
exports.lengthfitoyd = (feet, inches) => feet * 2.743199995830336 + inches * 3.081600050035968;
/**
 * Converts yards (yd) to inches (in)
 */
exports.lengthydtoin = (value) => value * 36.0000002;
/**
 * Converts inches (in) to yards (yd)
 */
exports.lengthintoyd = (value) => value * 0.0277777776;
/**
 * Converts yards (yd) to mils (mil)
 */
exports.lengthydtomil = (value) => value * 36000.0002;
/**
 * Converts mils (mil) to yards (yd)
 */
exports.lengthmiltoyd = (value) => value * 0.0000277777776;
/**
 * Converts feet (ft) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
exports.lengthfttofi = (value) => {
    const portions = [1.09361330, 0.973520233];
    return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};
/**
 * Converts feet and inches (f'i") to feet (ft)
 */
exports.lengthfitoft = (feet, inches) => feet * 0.914399998610112 + inches * 1.027200016678656;
/**
 * Converts feet (ft) to inches (in)
 */
exports.lengthfttoin = (value) => value * 12.0000001;
/**
 * Converts inches (in) to feet (ft)
 */
exports.lengthintoft = (value) => value * 0.0833333329;
/**
 * Converts feet (ft) to mils (mil)
 */
exports.lengthfttomil = (value) => value * 12000.0001;
/**
 * Converts mils (mil) to feet (ft)
 */
exports.lengthmiltoft = (value) => value * 0.0000833333329;
/**
 * Converts feet and inches (f'i") to inches (in)
 */
exports.lengthfitoin = (feet, inches) => feet * 0.07619999949708 + inches * 0.08560000095504;
/**
 * Converts inches (in) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
exports.lengthintofi = (value) => {
    const portions = [13.1233597, 11.6822429];
    return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};
/**
 * Converts feet and inches (f'i") to mils (mil)
 */
exports.lengthfitomil = (feet, inches) => feet * 0.00007619999949708001 + inches * 0.00008560000095504;
/**
 * Converts mils (mil) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
exports.lengthmiltofi = (value) => {
    const portions = [13123.3597, 11682.2429];
    return portions.map((portion, index) => { const part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};
/**
 * Converts inches (in) to mils (mil)
 */
exports.lengthintomil = (value) => value * 1000.00000;
/**
 * Converts mils (mil) to inches (in)
 */
exports.lengthmiltoin = (value) => value * 0.00100000000;
