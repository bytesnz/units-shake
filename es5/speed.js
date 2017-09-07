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
exports.speedkmhtoms = function (value) { return value / 3.6; };
exports.speedmstokmh = function (value) { return value * 3.6; };
// km/h to mph
exports.speedkmhtomph = function (value) { return value * 0.6214; };
exports.speedmphtokmh = function (value) { return value / 0.6214; };
// km/h to kn
exports.speedkmhtokn = function (value) { return value * 0.54; };
exports.speedkntokmh = function (value) { return value / 0.54; };
// mph to m/s
exports.speedmphtoms = function (value) { return value / 2.23694; };
exports.speedmstomph = function (value) { return value * 2.23694; };
// mph to kn
exports.speedmphtokn = function (value) { return value * 0.868976; };
exports.speedkntomph = function (value) { return value / 0.868976; };
// kn to m/s
exports.speedkntoms = function (value) { return value / 1.94384; };
exports.speedmstokn = function (value) { return value * 1.94384; };
