"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SI = {
    rad: {
        name: {
            singular: 'radian',
            plural: 'radians',
        },
        to_anchor: 180 / Math.PI,
    },
    deg: {
        name: {
            singular: 'degree',
            plural: 'degrees',
        },
        to_anchor: 1,
    },
    grad: {
        name: {
            singular: 'gradian',
            plural: 'gradians',
        },
        to_anchor: 9 / 10,
    },
    arcmin: {
        name: {
            singular: 'arcminute',
            plural: 'arcminutes',
        },
        to_anchor: 1 / 60,
    },
    arcsec: {
        name: {
            singular: 'arcsecond',
            plural: 'arcseconds',
        },
        to_anchor: 1 / 3600,
    },
};
var measure = {
    systems: {
        SI: SI,
    },
};
exports.default = measure;
