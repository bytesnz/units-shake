"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
exports.makeTests = function (module, type, values) {
    var i, j;
    values.forEach(function (value) {
        var units = Object.keys(value);
        var _loop_1 = function () {
            var unit1 = units[i];
            var _loop_2 = function () {
                var unit2 = units[j];
                var forwardConversionName = "" + type + unit1 + "to" + unit2;
                var reverseConversionName = "" + type + unit2 + "to" + unit1;
                ava_1.default(forwardConversionName + " - " + value[unit1] + unit1 + " => " + value[unit2] + unit2, function (t) {
                    t.is(typeof module[forwardConversionName], 'function');
                    var result = module[forwardConversionName](value[unit1]);
                    var allowedError = 0.001 * value[unit2];
                    if (Math.abs(result - value[unit2]) < allowedError) {
                        t.pass();
                    }
                    else {
                        t.is(result, value[unit2]);
                    }
                });
                ava_1.default(reverseConversionName + " - " + value[unit2] + unit2 + " => " + value[unit1] + unit1, function (t) {
                    t.is(typeof module[reverseConversionName], 'function');
                    var result = module[reverseConversionName](value[unit2]);
                    var allowedError = 0.001 * value[unit1];
                    if (Math.abs(result - value[unit1]) < allowedError) {
                        t.pass();
                    }
                    else {
                        t.is(result, value[unit1]);
                    }
                });
            };
            for (j = i + 1; j < units.length; j++) {
                _loop_2();
            }
        };
        for (i = 0; i < units.length; i++) {
            _loop_1();
        }
    });
};
exports.default = exports.makeTests;
