"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var temperature = require("./temperature");
var pressure = require("./pressure");
var speed = require("./speed");
var modules = {
    pressure: pressure,
    speed: speed,
    temperature: temperature
};
exports.default = modules;
