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
    var metric = {
        'min/km': {
            name: {
                singular: 'Minute per kilometre',
                plural: 'Minutes per kilometre',
            },
            to_anchor: 0.06,
        },
        's/m': {
            name: {
                singular: 'Second per metre',
                plural: 'Seconds per metre',
            },
            to_anchor: 1,
        },
    };
    var imperial = {
        'min/mi': {
            name: {
                singular: 'Minute per mile',
                plural: 'Minutes per mile',
            },
            to_anchor: 0.0113636,
        },
        's/ft': {
            name: {
                singular: 'Second per foot',
                plural: 'Seconds per foot',
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
                    ratio: 0.3048,
                },
            },
            imperial: {
                metric: {
                    ratio: 1 / 0.3048,
                },
            },
        },
    };
    exports.default = measure;
});
