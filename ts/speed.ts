/**
 * Available speed units are:
 * - kilometers per hour (km/h)
 * - knots (kn)
 * - metres per second (m/s)
 * - miles per hour (mph)
 */

// km/h to m/s
export const speedkmhtoms = (value: number): number => value / 3.6;
export const speedmstokmh = (value: number): number => value * 3.6;

// km/h to mph
export const speedkmhtomph = (value: number): number => value * 0.6214;
export const speedmphtokmh = (value: number): number => value / 0.6214;

// km/h to kn
export const speedkmhtokn = (value: number): number => value * 0.54;
export const speedkntokmh = (value: number): number => value / 0.54;

// mph to m/s
export const speedmphtoms = (value: number): number => value / 2.23694;
export const speedmstomph = (value: number): number => value * 2.23694;

// mph to kn
export const speedmphtokn = (value: number): number => value * 0.868976;
export const speedkntomph = (value: number): number => value / 0.868976;

// kn to m/s
export const speedkntoms = (value: number): number => value / 1.94384;
export const speedmstokn = (value: number): number => value * 1.94384;
