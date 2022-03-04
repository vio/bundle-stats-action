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
    var SI = {
        V: {
            name: {
                singular: 'Volt',
                plural: 'Volts',
            },
            to_anchor: 1,
        },
        mV: {
            name: {
                singular: 'Millivolt',
                plural: 'Millivolts',
            },
            to_anchor: 0.001,
        },
        kV: {
            name: {
                singular: 'Kilovolt',
                plural: 'Kilovolts',
            },
            to_anchor: 1000,
        },
    };
    var measure = {
        systems: {
            SI: SI,
        },
    };
    exports.default = measure;
});
