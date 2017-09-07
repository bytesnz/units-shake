"use strict";
/**
 * Available temperature units are:
 * - degrees fahrenheit (°F)
 * - degrees celsius (°C)
 * - kelvin (K)
 */
Object.defineProperty(exports, "__esModule", { value: true });
// F to C
exports.temperatureFtoC = (value) => (value - 32) / 1.8;
exports.temperatureCtoF = (value) => value * 1.8 + 32;
// F to K
exports.temperatureFtoK = (value) => (value - 32) / 1.8 + 273.15;
exports.temperatureKtoF = (value) => (value - 273.15) * 1.8 + 32;
// C to K
exports.temperatureCtoK = (value) => value + 273.15;
exports.temperatureKtoC = (value) => value - 273.15;
