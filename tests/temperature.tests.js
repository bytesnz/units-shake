"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const temperatureModule = require("../temperature");
const makeTests_1 = require("./lib/makeTests");
makeTests_1.default(temperatureModule, 'temperature', [
    {
        C: 25,
        F: 77,
        K: 298.15
    },
    {
        C: 0,
        F: 32,
        K: 273.15
    }
]);
