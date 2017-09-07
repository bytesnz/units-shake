"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const temperature = require("./temperature");
const pressure = require("./pressure");
const speed = require("./speed");
const modules = {
    pressure,
    speed,
    temperature
};
exports.default = modules;
