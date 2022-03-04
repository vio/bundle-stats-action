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
        c: {
            name: {
                singular: 'Coulomb',
                plural: 'Coulombs',
            },
            to_anchor: 1,
        },
        mC: {
            name: {
                singular: 'Millicoulomb',
                plural: 'Millicoulombs',
            },
            to_anchor: 1 / 1000,
        },
        μC: {
            name: {
                singular: 'Microcoulomb',
                plural: 'Microcoulombs',
            },
            to_anchor: 1 / 1000000,
        },
        nC: {
            name: {
                singular: 'Nanocoulomb',
                plural: 'Nanocoulombs',
            },
            to_anchor: 1e-9,
        },
        pC: {
            name: {
                singular: 'Picocoulomb',
                plural: 'Picocoulombs',
            },
            to_anchor: 1e-12,
        },
    };
    var measure = {
        systems: {
            SI: SI,
        },
    };
    exports.default = measure;
});
