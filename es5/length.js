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
exports.lengthmtokm = function (value) { return value * 0.00100000000; };
/**
 * Converts kilometers (km) to meters (m)
 */
exports.lengthkmtom = function (value) { return value * 1000.00000; };
/**
 * Converts meters (m) to millimeters (mm)
 */
exports.lengthmtomm = function (value) { return value * 1000.00000; };
/**
 * Converts millimeters (mm) to meters (m)
 */
exports.lengthmmtom = function (value) { return value * 0.00100000000; };
/**
 * Converts meters (m) to miles (mi)
 */
exports.lengthmtomi = function (value) { return value * 0.000621371190; };
/**
 * Converts miles (mi) to meters (m)
 */
exports.lengthmitom = function (value) { return value * 1609.34401; };
/**
 * Converts meters (m) to yards (yd)
 */
exports.lengthmtoyd = function (value) { return value * 1.09361330; };
/**
 * Converts yards (yd) to meters (m)
 */
exports.lengthydtom = function (value) { return value * 0.914399999; };
/**
 * Converts meters (m) to feet (ft)
 */
exports.lengthmtoft = function (value) { return value * 3.28083990; };
/**
 * Converts feet (ft) to meters (m)
 */
exports.lengthfttom = function (value) { return value * 0.304800000; };
/**
 * Converts meters (m) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
exports.lengthmtofi = function (value) {
    var portions = [0.333333333, 0.296728967];
    return portions.map(function (portion, index) { var part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};
/**
 * Converts feet and inches (f'i") to meters (m)
 */
exports.lengthfitom = function (feet, inches) { return feet * 3 + inches * 3.3700788; };
/**
 * Converts meters (m) to inches (in)
 */
exports.lengthmtoin = function (value) { return value * 39.3700790; };
/**
 * Converts inches (in) to meters (m)
 */
exports.lengthintom = function (value) { return value * 0.0253999998; };
/**
 * Converts meters (m) to mils (mil)
 */
exports.lengthmtomil = function (value) { return value * 39370.0790; };
/**
 * Converts mils (mil) to meters (m)
 */
exports.lengthmiltom = function (value) { return value * 0.0000253999998; };
/**
 * Converts kilometers (km) to millimeters (mm)
 */
exports.lengthkmtomm = function (value) { return value * 1000000.00; };
/**
 * Converts millimeters (mm) to kilometers (km)
 */
exports.lengthmmtokm = function (value) { return value * 0.00000100000000; };
/**
 * Converts kilometers (km) to miles (mi)
 */
exports.lengthkmtomi = function (value) { return value * 0.621371190; };
/**
 * Converts miles (mi) to kilometers (km)
 */
exports.lengthmitokm = function (value) { return value * 1.60934401; };
/**
 * Converts kilometers (km) to yards (yd)
 */
exports.lengthkmtoyd = function (value) { return value * 1093.61330; };
/**
 * Converts yards (yd) to kilometers (km)
 */
exports.lengthydtokm = function (value) { return value * 0.000914399999; };
/**
 * Converts kilometers (km) to feet (ft)
 */
exports.lengthkmtoft = function (value) { return value * 3280.83990; };
/**
 * Converts feet (ft) to kilometers (km)
 */
exports.lengthfttokm = function (value) { return value * 0.000304800000; };
/**
 * Converts kilometers (km) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
exports.lengthkmtofi = function (value) {
    var portions = [0.000333333333, 0.000296728967];
    return portions.map(function (portion, index) { var part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};
/**
 * Converts feet and inches (f'i") to kilometers (km)
 */
exports.lengthfitokm = function (feet, inches) { return feet * 3000 + inches * 3370.0788; };
/**
 * Converts kilometers (km) to inches (in)
 */
exports.lengthkmtoin = function (value) { return value * 39370.0790; };
/**
 * Converts inches (in) to kilometers (km)
 */
exports.lengthintokm = function (value) { return value * 0.0000253999998; };
/**
 * Converts kilometers (km) to mils (mil)
 */
exports.lengthkmtomil = function (value) { return value * 39370079.0; };
/**
 * Converts mils (mil) to kilometers (km)
 */
exports.lengthmiltokm = function (value) { return value * 2.53999998e-8; };
/**
 * Converts millimeters (mm) to miles (mi)
 */
exports.lengthmmtomi = function (value) { return value * 6.21371190e-7; };
/**
 * Converts miles (mi) to millimeters (mm)
 */
exports.lengthmitomm = function (value) { return value * 1609344.01; };
/**
 * Converts millimeters (mm) to yards (yd)
 */
exports.lengthmmtoyd = function (value) { return value * 0.00109361330; };
/**
 * Converts yards (yd) to millimeters (mm)
 */
exports.lengthydtomm = function (value) { return value * 914.399999; };
/**
 * Converts millimeters (mm) to feet (ft)
 */
exports.lengthmmtoft = function (value) { return value * 0.00328083990; };
/**
 * Converts feet (ft) to millimeters (mm)
 */
exports.lengthfttomm = function (value) { return value * 304.800000; };
/**
 * Converts millimeters (mm) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
exports.lengthmmtofi = function (value) {
    var portions = [333.333333, 296.728967];
    return portions.map(function (portion, index) { var part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};
/**
 * Converts feet and inches (f'i") to millimeters (mm)
 */
exports.lengthfitomm = function (feet, inches) { return feet * 0.003 + inches * 0.0033700787999999997; };
/**
 * Converts millimeters (mm) to inches (in)
 */
exports.lengthmmtoin = function (value) { return value * 0.0393700790; };
/**
 * Converts inches (in) to millimeters (mm)
 */
exports.lengthintomm = function (value) { return value * 25.3999998; };
/**
 * Converts millimeters (mm) to mils (mil)
 */
exports.lengthmmtomil = function (value) { return value * 39.3700790; };
/**
 * Converts mils (mil) to millimeters (mm)
 */
exports.lengthmiltomm = function (value) { return value * 0.0253999998; };
/**
 * Converts miles (mi) to yards (yd)
 */
exports.lengthmitoyd = function (value) { return value * 1760.00001; };
/**
 * Converts yards (yd) to miles (mi)
 */
exports.lengthydtomi = function (value) { return value * 0.000568181815; };
/**
 * Converts miles (mi) to feet (ft)
 */
exports.lengthmitoft = function (value) { return value * 5280.00003; };
/**
 * Converts feet (ft) to miles (mi)
 */
exports.lengthfttomi = function (value) { return value * 0.000189393938; };
/**
 * Converts miles (mi) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
exports.lengthmitofi = function (value) {
    var portions = [0.000207123730, 0.000184378831];
    return portions.map(function (portion, index) { var part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};
/**
 * Converts feet and inches (f'i") to miles (mi)
 */
exports.lengthfitomi = function (feet, inches) { return feet * 4828.0320173840055 + inches * 5423.616115835689; };
/**
 * Converts miles (mi) to inches (in)
 */
exports.lengthmitoin = function (value) { return value * 63360.0006; };
/**
 * Converts inches (in) to miles (mi)
 */
exports.lengthintomi = function (value) { return value * 0.0000157828281; };
/**
 * Converts miles (mi) to mils (mil)
 */
exports.lengthmitomil = function (value) { return value * 63360000.6; };
/**
 * Converts mils (mil) to miles (mi)
 */
exports.lengthmiltomi = function (value) { return value * 1.57828281e-8; };
/**
 * Converts yards (yd) to feet (ft)
 */
exports.lengthydtoft = function (value) { return value * 3.00000000; };
/**
 * Converts feet (ft) to yards (yd)
 */
exports.lengthfttoyd = function (value) { return value * 0.333333333; };
/**
 * Converts yards (yd) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
exports.lengthydtofi = function (value) {
    var portions = [0.364537767, 0.324506744];
    return portions.map(function (portion, index) { var part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};
/**
 * Converts feet and inches (f'i") to yards (yd)
 */
exports.lengthfitoyd = function (feet, inches) { return feet * 2.743199995830336 + inches * 3.081600050035968; };
/**
 * Converts yards (yd) to inches (in)
 */
exports.lengthydtoin = function (value) { return value * 36.0000002; };
/**
 * Converts inches (in) to yards (yd)
 */
exports.lengthintoyd = function (value) { return value * 0.0277777776; };
/**
 * Converts yards (yd) to mils (mil)
 */
exports.lengthydtomil = function (value) { return value * 36000.0002; };
/**
 * Converts mils (mil) to yards (yd)
 */
exports.lengthmiltoyd = function (value) { return value * 0.0000277777776; };
/**
 * Converts feet (ft) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
exports.lengthfttofi = function (value) {
    var portions = [1.09361330, 0.973520233];
    return portions.map(function (portion, index) { var part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};
/**
 * Converts feet and inches (f'i") to feet (ft)
 */
exports.lengthfitoft = function (feet, inches) { return feet * 0.914399998610112 + inches * 1.027200016678656; };
/**
 * Converts feet (ft) to inches (in)
 */
exports.lengthfttoin = function (value) { return value * 12.0000001; };
/**
 * Converts inches (in) to feet (ft)
 */
exports.lengthintoft = function (value) { return value * 0.0833333329; };
/**
 * Converts feet (ft) to mils (mil)
 */
exports.lengthfttomil = function (value) { return value * 12000.0001; };
/**
 * Converts mils (mil) to feet (ft)
 */
exports.lengthmiltoft = function (value) { return value * 0.0000833333329; };
/**
 * Converts feet and inches (f'i") to inches (in)
 */
exports.lengthfitoin = function (feet, inches) { return feet * 0.07619999949708 + inches * 0.08560000095504; };
/**
 * Converts inches (in) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
exports.lengthintofi = function (value) {
    var portions = [13.1233597, 11.6822429];
    return portions.map(function (portion, index) { var part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};
/**
 * Converts feet and inches (f'i") to mils (mil)
 */
exports.lengthfitomil = function (feet, inches) { return feet * 0.00007619999949708001 + inches * 0.00008560000095504; };
/**
 * Converts mils (mil) to feet and inches (f'i")
 *
 * @returns [feet, inches]
 */
exports.lengthmiltofi = function (value) {
    var portions = [13123.3597, 11682.2429];
    return portions.map(function (portion, index) { var part = (index === portions.length - 1 ? value / portion : Math.floor(value / portion)); value = value - part; return part; });
};
/**
 * Converts inches (in) to mils (mil)
 */
exports.lengthintomil = function (value) { return value * 1000.00000; };
/**
 * Converts mils (mil) to inches (in)
 */
exports.lengthmiltoin = function (value) { return value * 0.00100000000; };
