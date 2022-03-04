(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var metric = {
        mcg: {
            name: {
                singular: 'Microgram',
                plural: 'Micrograms',
            },
            to_anchor: 1 / 1000000,
        },
        mg: {
            name: {
                singular: 'Milligram',
                plural: 'Milligrams',
            },
            to_anchor: 1 / 1000,
        },
        g: {
            name: {
                singular: 'Gram',
                plural: 'Grams',
            },
            to_anchor: 1,
        },
        kg: {
            name: {
                singular: 'Kilogram',
                plural: 'Kilograms',
            },
            to_anchor: 1000,
        },
        mt: {
            name: {
                singular: 'Metric Tonne',
                plural: 'Metric Tonnes',
            },
            to_anchor: 1000000,
        },
    };
    var imperial = {
        oz: {
            name: {
                singular: 'Ounce',
                plural: 'Ounces',
            },
            to_anchor: 1 / 16,
        },
        lb: {
            name: {
                singular: 'Pound',
                plural: 'Pounds',
            },
            to_anchor: 1,
        },
        t: {
            name: {
                singular: 'Ton',
                plural: 'Tons',
            },
            to_anchor: 2000,
        },
    };
    var measure = {
        systems: {
            metric: metric,
            imperial: imperial,
        },
        anchors: {
            metric: {
                imperial: {
                    ratio: 1 / 453.592,
                },
            },
            imperial: {
                metric: {
                    ratio: 453.592,
                },
            },
        },
    };
    exports.default = measure;
});
