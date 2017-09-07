/**
 * Available temperature units are:
 * - degrees fahrenheit (°F)
 * - degrees celsius (°C)
 * - kelvin (K)
 */

// F to C
export const temperatureFtoC = (value: number): number => (value - 32) / 1.8;
export const temperatureCtoF = (value: number): number => value * 1.8 + 32;

// F to K
export const temperatureFtoK = (value: number): number => (value - 32) / 1.8 + 273.15;
export const temperatureKtoF = (value: number): number => (value - 273.15) * 1.8 + 32;

// C to K
export const temperatureCtoK = (value: number): number => value + 273.15;
export const temperatureKtoC = (value: number): number => value - 273.15;
