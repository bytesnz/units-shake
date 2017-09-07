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
const same = (value) => value;
// inHg to mmHg (torr)
exports.pressureinHgtommHg = (value) => value / 0.03937008;
exports.pressuremmHgtoinHg = (value) => value * 0.03937008;
exports.pressureinHgtotorr = exports.pressureinHgtommHg;
exports.pressuretorrtoinHg = exports.pressuremmHgtoinHg;
// inHg to psi
exports.pressureinHgtopsi = (value) => value * 0.491130;
exports.pressurepsitoinHg = (value) => value / 0.491130;
// inHg to kPa
exports.pressureinHgtokPa = (value) => value / 0.29529983;
exports.pressurekPatoinHg = (value) => value * 0.29529983;
// inHg to mb (hPa)
exports.pressureinHgtomb = (value) => value * 33.8639;
exports.pressurembtoinHg = (value) => value / 33.8639;
exports.pressureinHgtohPa = exports.pressureinHgtomb;
exports.pressurehPatoinHg = exports.pressurembtoinHg;
// inHg to Pa
exports.pressureinHgtoPa = (value) => value / 0.00029529983;
exports.pressurePatoinHg = (value) => value * 0.00029529983;
// inHg to bar
exports.pressureinHgtobar = (value) => value / 29.529983;
exports.pressurebartoinHg = (value) => value * 29.529983;
// mmHg to torr
exports.pressuremmHgtotorr = same;
exports.pressuretorrtommHg = same;
// mmHg (torr) to psi
exports.pressuremmHgtopsi = (value) => value * 0.0193368;
exports.pressurepsitommHg = (value) => value / 0.0193368;
exports.pressuretorrtopsi = exports.pressuremmHgtopsi;
exports.pressurepsitotorr = exports.pressurepsitommHg;
// mmHg (torr) to kPa
exports.pressuremmHgtokPa = (value) => value / 7.50061584;
exports.pressurekPatommHg = (value) => value * 7.50061584;
exports.pressuretorrtokPa = exports.pressuremmHgtokPa;
exports.pressurekPatotorr = exports.pressurekPatommHg;
// mmHg (torr) to mb (hPa)
exports.pressuremmHgtomb = (value) => value * 1.333224;
exports.pressurembtommHg = (value) => value / 1.333224;
exports.pressuretorrtomb = exports.pressuremmHgtomb;
exports.pressurembtotorr = exports.pressurembtommHg;
exports.pressuremmHgtohPa = exports.pressuremmHgtomb;
exports.pressurehPatommHg = exports.pressurembtommHg;
exports.pressuretorrtohPa = exports.pressuremmHgtomb;
exports.pressurehPatotorr = exports.pressurembtommHg;
// mmHg (torr) to Pa
exports.pressuremmHgtoPa = (value) => value * 133.322387;
exports.pressurePatommHg = (value) => value / 133.322387;
exports.pressuretorrtoPa = exports.pressuremmHgtoPa;
exports.pressurePatotorr = exports.pressurePatommHg;
// mmHg (torr) to bar
exports.pressuremmHgtobar = (value) => value / 750.06158;
exports.pressurebartommHg = (value) => value * 750.06158;
exports.pressuretorrtobar = exports.pressuremmHgtobar;
exports.pressurebartotorr = exports.pressurebartommHg;
// psi to kPa
exports.pressurepsitokPa = (value) => value * 6.89476;
exports.pressurekPatopsi = (value) => value / 6.89476;
// psi to mb (hPa)
exports.pressurepsitomb = (value) => value * 68.9476;
exports.pressurembtopsi = (value) => value / 68.9476;
exports.pressurepsitohPa = exports.pressurepsitomb;
exports.pressurehPatopsi = exports.pressurembtopsi;
// psi to Pa
exports.pressurepsitoPa = (value) => value * 6894.75719;
exports.pressurePatopsi = (value) => value / 6894.75719;
// psi to bar
exports.pressurepsitobar = (value) => value * 0.0689475719;
exports.pressurebartopsi = (value) => value / 0.0689475719;
// kPa to mb (hPa)
exports.pressurekPatomb = (value) => value * 10;
exports.pressurembtokPa = (value) => value / 10;
exports.pressurekPatohPa = exports.pressurekPatomb;
exports.pressurehPatokPa = exports.pressurembtokPa;
// kPa to Pa
exports.pressurekPatoPa = (value) => value * 1000;
exports.pressurePatokPa = (value) => value / 1000;
// kPa to bar
exports.pressurekPatobar = (value) => value / 100;
exports.pressurebartokPa = (value) => value * 100;
// mb to hPa
exports.pressurembtohPa = same;
exports.pressurehPatomb = same;
// mb (hPa) to Pa
exports.pressurembtoPa = (value) => value * 100;
exports.pressurePatomb = (value) => value / 100;
exports.pressurehPatoPa = exports.pressurembtoPa;
exports.pressurePatohPa = exports.pressurePatomb;
// mb (hPa) to bar
exports.pressurembtobar = (value) => value / 1000;
exports.pressurebartomb = (value) => value * 1000;
exports.pressurehPatobar = exports.pressurembtobar;
exports.pressurebartohPa = exports.pressurebartomb;
// Pa to bar
exports.pressurePatobar = (value) => value / 100000;
exports.pressurebartoPa = (value) => value * 100000;
