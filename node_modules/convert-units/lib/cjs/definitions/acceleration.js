"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var metric = {
    'g-force': {
        name: {
            singular: 'g-force',
            plural: 'g-forces',
        },
        to_anchor: 9.80665,
    },
    'm/s2': {
        name: {
            singular: 'Metre per second squared',
            plural: 'Metres per second squared',
        },
        to_anchor: 1,
    },
};
var measure = {
    systems: {
        metric: metric,
    },
};
exports.default = measure;
