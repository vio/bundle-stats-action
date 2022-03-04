"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var metric = {
    ea: {
        name: {
            singular: 'Each',
            plural: 'Each',
        },
        to_anchor: 1,
    },
    dz: {
        name: {
            singular: 'Dozen',
            plural: 'Dozens',
        },
        to_anchor: 12,
    },
};
var measure = {
    systems: {
        metric: metric,
    },
};
exports.default = measure;
