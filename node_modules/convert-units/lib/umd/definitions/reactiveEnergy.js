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
        VARh: {
            name: {
                singular: 'Volt-Ampere Reactive Hour',
                plural: 'Volt-Amperes Reactive Hour',
            },
            to_anchor: 1,
        },
        mVARh: {
            name: {
                singular: 'Millivolt-Ampere Reactive Hour',
                plural: 'Millivolt-Amperes Reactive Hour',
            },
            to_anchor: 0.001,
        },
        kVARh: {
            name: {
                singular: 'Kilovolt-Ampere Reactive Hour',
                plural: 'Kilovolt-Amperes Reactive Hour',
            },
            to_anchor: 1000,
        },
        MVARh: {
            name: {
                singular: 'Megavolt-Ampere Reactive Hour',
                plural: 'Megavolt-Amperes Reactive Hour',
            },
            to_anchor: 1000000,
        },
        GVARh: {
            name: {
                singular: 'Gigavolt-Ampere Reactive Hour',
                plural: 'Gigavolt-Amperes Reactive Hour',
            },
            to_anchor: 1000000000,
        },
    };
    var measure = {
        systems: {
            SI: SI,
        },
    };
    exports.default = measure;
});
