"use strict";
/**
 * Available speed units are:
 * - kilometers per hour (km/h)
 * - knots (kn)
 * - metres per second (m/s)
 * - miles per hour (mph)
 */
Object.defineProperty(exports, "__esModule", { value: true });
// km/h to m/s
exports.speedkmhtoms = (value) => value / 3.6;
exports.speedmstokmh = (value) => value * 3.6;
// km/h to mph
exports.speedkmhtomph = (value) => value * 0.6214;
exports.speedmphtokmh = (value) => value / 0.6214;
// km/h to kn
exports.speedkmhtokn = (value) => value * 0.54;
exports.speedkntokmh = (value) => value / 0.54;
// mph to m/s
exports.speedmphtoms = (value) => value / 2.23694;
exports.speedmstomph = (value) => value * 2.23694;
// mph to kn
exports.speedmphtokn = (value) => value * 0.868976;
exports.speedkntomph = (value) => value / 0.868976;
// kn to m/s
exports.speedkntoms = (value) => value / 1.94384;
exports.speedmstokn = (value) => value * 1.94384;
