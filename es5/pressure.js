"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Available pressure units are:
 * - inches of mercury (inHg)
 * - millimeters of mercury (mmHg) or (torr)
 * - pounds per square inch (psi)
 * - kilopascals (kPa)
 * - millibars (mb) or hectopascals (hPa)
 * - pascal (Pa)
 * - bar
 */
var same = function (value) { return value; };
// inHg to mmHg (torr)
exports.pressureinHgtommHg = function (value) { return value / 0.03937008; };
exports.pressuremmHgtoinHg = function (value) { return value * 0.03937008; };
exports.pressureinHgtotorr = exports.pressureinHgtommHg;
exports.pressuretorrtoinHg = exports.pressuremmHgtoinHg;
// inHg to psi
exports.pressureinHgtopsi = function (value) { return value * 0.491130; };
exports.pressurepsitoinHg = function (value) { return value / 0.491130; };
// inHg to kPa
exports.pressureinHgtokPa = function (value) { return value / 0.29529983; };
exports.pressurekPatoinHg = function (value) { return value * 0.29529983; };
// inHg to mb (hPa)
exports.pressureinHgtomb = function (value) { return value * 33.8639; };
exports.pressurembtoinHg = function (value) { return value / 33.8639; };
exports.pressureinHgtohPa = exports.pressureinHgtomb;
exports.pressurehPatoinHg = exports.pressurembtoinHg;
// inHg to Pa
exports.pressureinHgtoPa = function (value) { return value / 0.00029529983; };
exports.pressurePatoinHg = function (value) { return value * 0.00029529983; };
// inHg to bar
exports.pressureinHgtobar = function (value) { return value / 29.529983; };
exports.pressurebartoinHg = function (value) { return value * 29.529983; };
// mmHg to torr
exports.pressuremmHgtotorr = same;
exports.pressuretorrtommHg = same;
// mmHg (torr) to psi
exports.pressuremmHgtopsi = function (value) { return value * 0.0193368; };
exports.pressurepsitommHg = function (value) { return value / 0.0193368; };
exports.pressuretorrtopsi = exports.pressuremmHgtopsi;
exports.pressurepsitotorr = exports.pressurepsitommHg;
// mmHg (torr) to kPa
exports.pressuremmHgtokPa = function (value) { return value / 7.50061584; };
exports.pressurekPatommHg = function (value) { return value * 7.50061584; };
exports.pressuretorrtokPa = exports.pressuremmHgtokPa;
exports.pressurekPatotorr = exports.pressurekPatommHg;
// mmHg (torr) to mb (hPa)
exports.pressuremmHgtomb = function (value) { return value * 1.333224; };
exports.pressurembtommHg = function (value) { return value / 1.333224; };
exports.pressuretorrtomb = exports.pressuremmHgtomb;
exports.pressurembtotorr = exports.pressurembtommHg;
exports.pressuremmHgtohPa = exports.pressuremmHgtomb;
exports.pressurehPatommHg = exports.pressurembtommHg;
exports.pressuretorrtohPa = exports.pressuremmHgtomb;
exports.pressurehPatotorr = exports.pressurembtommHg;
// mmHg (torr) to Pa
exports.pressuremmHgtoPa = function (value) { return value * 133.322387; };
exports.pressurePatommHg = function (value) { return value / 133.322387; };
exports.pressuretorrtoPa = exports.pressuremmHgtoPa;
exports.pressurePatotorr = exports.pressurePatommHg;
// mmHg (torr) to bar
exports.pressuremmHgtobar = function (value) { return value / 750.06158; };
exports.pressurebartommHg = function (value) { return value * 750.06158; };
exports.pressuretorrtobar = exports.pressuremmHgtobar;
exports.pressurebartotorr = exports.pressurebartommHg;
// psi to kPa
exports.pressurepsitokPa = function (value) { return value * 6.89476; };
exports.pressurekPatopsi = function (value) { return value / 6.89476; };
// psi to mb (hPa)
exports.pressurepsitomb = function (value) { return value * 68.9476; };
exports.pressurembtopsi = function (value) { return value / 68.9476; };
exports.pressurepsitohPa = exports.pressurepsitomb;
exports.pressurehPatopsi = exports.pressurembtopsi;
// psi to Pa
exports.pressurepsitoPa = function (value) { return value * 6894.75719; };
exports.pressurePatopsi = function (value) { return value / 6894.75719; };
// psi to bar
exports.pressurepsitobar = function (value) { return value * 0.0689475719; };
exports.pressurebartopsi = function (value) { return value / 0.0689475719; };
// kPa to mb (hPa)
exports.pressurekPatomb = function (value) { return value * 10; };
exports.pressurembtokPa = function (value) { return value / 10; };
exports.pressurekPatohPa = exports.pressurekPatomb;
exports.pressurehPatokPa = exports.pressurembtokPa;
// kPa to Pa
exports.pressurekPatoPa = function (value) { return value * 1000; };
exports.pressurePatokPa = function (value) { return value / 1000; };
// kPa to bar
exports.pressurekPatobar = function (value) { return value / 100; };
exports.pressurebartokPa = function (value) { return value * 100; };
// mb to hPa
exports.pressurembtohPa = same;
exports.pressurehPatomb = same;
// mb (hPa) to Pa
exports.pressurembtoPa = function (value) { return value * 100; };
exports.pressurePatomb = function (value) { return value / 100; };
exports.pressurehPatoPa = exports.pressurembtoPa;
exports.pressurePatohPa = exports.pressurePatomb;
// mb (hPa) to bar
exports.pressurembtobar = function (value) { return value / 1000; };
exports.pressurebartomb = function (value) { return value * 1000; };
exports.pressurehPatobar = exports.pressurembtobar;
exports.pressurebartohPa = exports.pressurebartomb;
// Pa to bar
exports.pressurePatobar = function (value) { return value / 100000; };
exports.pressurebartoPa = function (value) { return value * 100000; };
