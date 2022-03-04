"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SI = {
    N: {
        name: {
            singular: 'Newton',
            plural: 'Newtons',
        },
        to_anchor: 1,
    },
    kN: {
        name: {
            singular: 'Kilonewton',
            plural: 'Kilonewtons',
        },
        to_anchor: 1000,
    },
    lbf: {
        name: {
            singular: 'Pound-force',
            plural: 'Pound-forces',
        },
        to_anchor: 4.44822,
    },
};
var measure = {
    systems: {
        SI: SI,
    },
};
exports.default = measure;
