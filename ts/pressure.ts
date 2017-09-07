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
const same = (value: number): number => value;

// inHg to mmHg (torr)
export const pressureinHgtommHg = (value: number): number => value / 0.03937008;
export const pressuremmHgtoinHg = (value: number): number => value * 0.03937008;
export const pressureinHgtotorr = pressureinHgtommHg;
export const pressuretorrtoinHg = pressuremmHgtoinHg;

// inHg to psi
export const pressureinHgtopsi = (value: number): number => value * 0.491130;
export const pressurepsitoinHg = (value: number): number => value / 0.491130;

// inHg to kPa
export const pressureinHgtokPa = (value: number): number => value / 0.29529983;
export const pressurekPatoinHg = (value: number): number => value * 0.29529983;

// inHg to mb (hPa)
export const pressureinHgtomb = (value: number): number => value * 33.8639;
export const pressurembtoinHg = (value: number): number => value / 33.8639;
export const pressureinHgtohPa = pressureinHgtomb;
export const pressurehPatoinHg = pressurembtoinHg;

// inHg to Pa
export const pressureinHgtoPa = (value: number): number => value / 0.00029529983;
export const pressurePatoinHg = (value: number): number => value * 0.00029529983;

// inHg to bar
export const pressureinHgtobar = (value: number): number => value / 29.529983;
export const pressurebartoinHg = (value: number): number => value * 29.529983;

// mmHg to torr
export const pressuremmHgtotorr = same;
export const pressuretorrtommHg = same;

// mmHg (torr) to psi
export const pressuremmHgtopsi = (value: number): number => value * 0.0193368;
export const pressurepsitommHg = (value: number): number => value / 0.0193368;
export const pressuretorrtopsi = pressuremmHgtopsi;
export const pressurepsitotorr = pressurepsitommHg;

// mmHg (torr) to kPa
export const pressuremmHgtokPa = (value: number): number => value / 7.50061584;
export const pressurekPatommHg = (value: number): number => value * 7.50061584;
export const pressuretorrtokPa = pressuremmHgtokPa;
export const pressurekPatotorr = pressurekPatommHg;

// mmHg (torr) to mb (hPa)
export const pressuremmHgtomb = (value: number): number => value * 1.333224;
export const pressurembtommHg = (value: number): number => value / 1.333224;
export const pressuretorrtomb = pressuremmHgtomb;
export const pressurembtotorr = pressurembtommHg;
export const pressuremmHgtohPa = pressuremmHgtomb;
export const pressurehPatommHg = pressurembtommHg;
export const pressuretorrtohPa = pressuremmHgtomb;
export const pressurehPatotorr = pressurembtommHg;

// mmHg (torr) to Pa
export const pressuremmHgtoPa = (value: number): number => value * 133.322387;
export const pressurePatommHg = (value: number): number => value / 133.322387;
export const pressuretorrtoPa = pressuremmHgtoPa;
export const pressurePatotorr = pressurePatommHg;

// mmHg (torr) to bar
export const pressuremmHgtobar = (value: number): number => value / 750.06158;
export const pressurebartommHg = (value: number): number => value * 750.06158;
export const pressuretorrtobar = pressuremmHgtobar;
export const pressurebartotorr = pressurebartommHg;

// psi to kPa
export const pressurepsitokPa = (value: number): number => value * 6.89476;
export const pressurekPatopsi = (value: number): number => value / 6.89476;

// psi to mb (hPa)
export const pressurepsitomb = (value: number): number => value * 68.9476;
export const pressurembtopsi = (value: number): number => value / 68.9476;
export const pressurepsitohPa = pressurepsitomb;
export const pressurehPatopsi = pressurembtopsi;

// psi to Pa
export const pressurepsitoPa = (value: number): number => value * 6894.75719;
export const pressurePatopsi = (value: number): number => value / 6894.75719;

// psi to bar
export const pressurepsitobar = (value: number): number => value * 0.0689475719;
export const pressurebartopsi = (value: number): number => value / 0.0689475719;

// kPa to mb (hPa)
export const pressurekPatomb = (value: number): number => value * 10;
export const pressurembtokPa = (value: number): number => value / 10;
export const pressurekPatohPa = pressurekPatomb;
export const pressurehPatokPa = pressurembtokPa;

// kPa to Pa
export const pressurekPatoPa = (value: number): number => value * 1000;
export const pressurePatokPa = (value: number): number => value / 1000;

// kPa to bar
export const pressurekPatobar = (value: number): number => value / 100;
export const pressurebartokPa = (value: number): number => value * 100;

// mb to hPa
export const pressurembtohPa = same;
export const pressurehPatomb = same;

// mb (hPa) to Pa
export const pressurembtoPa = (value: number): number => value * 100;
export const pressurePatomb = (value: number): number => value / 100;
export const pressurehPatoPa = pressurembtoPa;
export const pressurePatohPa = pressurePatomb;

// mb (hPa) to bar
export const pressurembtobar = (value: number): number => value / 1000;
export const pressurebartomb = (value: number): number => value * 1000;
export const pressurehPatobar = pressurembtobar;
export const pressurebartohPa = pressurebartomb;

// Pa to bar
export const pressurePatobar = (value: number): number => value / 100000;
export const pressurebartoPa = (value: number): number => value * 100000;

