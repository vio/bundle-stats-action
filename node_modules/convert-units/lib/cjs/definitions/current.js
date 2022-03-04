"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SI = {
    A: {
        name: {
            singular: 'Ampere',
            plural: 'Amperes',
        },
        to_anchor: 1,
    },
    mA: {
        name: {
            singular: 'Milliampere',
            plural: 'Milliamperes',
        },
        to_anchor: 0.001,
    },
    kA: {
        name: {
            singular: 'Kiloampere',
            plural: 'Kiloamperes',
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
