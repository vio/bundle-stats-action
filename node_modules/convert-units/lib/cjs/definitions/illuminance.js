"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var metric = {
    lx: {
        name: {
            singular: 'Lux',
            plural: 'Lux',
        },
        to_anchor: 1,
    },
};
var imperial = {
    'ft-cd': {
        name: {
            singular: 'Foot-candle',
            plural: 'Foot-candles',
        },
        to_anchor: 1,
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
                ratio: 1 / 10.76391,
            },
        },
        imperial: {
            metric: {
                ratio: 10.76391,
            },
        },
    },
};
exports.default = measure;
