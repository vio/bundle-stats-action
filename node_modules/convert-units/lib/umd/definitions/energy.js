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
        Wh: {
            name: {
                singular: 'Watt-hour',
                plural: 'Watt-hours',
            },
            to_anchor: 3600,
        },
        mWh: {
            name: {
                singular: 'Milliwatt-hour',
                plural: 'Milliwatt-hours',
            },
            to_anchor: 3.6,
        },
        kWh: {
            name: {
                singular: 'Kilowatt-hour',
                plural: 'Kilowatt-hours',
            },
            to_anchor: 3600000,
        },
        MWh: {
            name: {
                singular: 'Megawatt-hour',
                plural: 'Megawatt-hours',
            },
            to_anchor: 3600000000,
        },
        GWh: {
            name: {
                singular: 'Gigawatt-hour',
                plural: 'Gigawatt-hours',
            },
            to_anchor: 3600000000000,
        },
        J: {
            name: {
                singular: 'Joule',
                plural: 'Joules',
            },
            to_anchor: 1,
        },
        kJ: {
            name: {
                singular: 'Kilojoule',
                plural: 'Kilojoules',
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
