"use strict";
/**
 * Available temperature units are:
 * - degrees fahrenheit (°F)
 * - degrees celsius (°C)
 * - kelvin (K)
 */
Object.defineProperty(exports, "__esModule", { value: true });
// F to C
exports.temperatureFtoC = function (value) { return (value - 32) / 1.8; };
exports.temperatureCtoF = function (value) { return value * 1.8 + 32; };
// F to K
exports.temperatureFtoK = function (value) { return (value - 32) / 1.8 + 273.15; };
exports.temperatureKtoF = function (value) { return (value - 273.15) * 1.8 + 32; };
// C to K
exports.temperatureCtoK = function (value) { return value + 273.15; };
exports.temperatureKtoC = function (value) { return value - 273.15; };
