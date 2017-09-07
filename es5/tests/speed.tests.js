"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var speedModule = require("../speed");
var makeTests_1 = require("./lib/makeTests");
makeTests_1.default(speedModule, 'speed', [
    {
        ms: 10,
        kmh: 36,
        kn: 19.4384,
        mph: 22.3694
    }
]);
