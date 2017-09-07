"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pressureModule = require("../pressure");
const makeTests_1 = require("./lib/makeTests");
makeTests_1.default(pressureModule, 'pressure', [
    {
        Pa: 1000,
        inHg: 0.2953,
        mmHg: 7.5006,
        torr: 7.5006,
        psi: 0.14504,
        kPa: 1,
        mb: 10,
        hPa: 10,
        bar: 0.01
    }
]);
