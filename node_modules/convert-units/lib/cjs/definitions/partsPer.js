"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SI = {
    ppm: {
        name: {
            singular: 'Part-per Million',
            plural: 'Parts-per Million',
        },
        to_anchor: 1,
    },
    ppb: {
        name: {
            singular: 'Part-per Billion',
            plural: 'Parts-per Billion',
        },
        to_anchor: 0.001,
    },
    ppt: {
        name: {
            singular: 'Part-per Trillion',
            plural: 'Parts-per Trillion',
        },
        to_anchor: 0.000001,
    },
    ppq: {
        name: {
            singular: 'Part-per Quadrillion',
            plural: 'Parts-per Quadrillion',
        },
        to_anchor: 0.000000001,
    },
};
var measure = {
    systems: {
        SI: SI,
    },
};
exports.default = measure;
