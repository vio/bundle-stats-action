var metric = {
    Pa: {
        name: {
            singular: 'pascal',
            plural: 'pascals',
        },
        to_anchor: 1 / 1000,
    },
    kPa: {
        name: {
            singular: 'kilopascal',
            plural: 'kilopascals',
        },
        to_anchor: 1,
    },
    MPa: {
        name: {
            singular: 'megapascal',
            plural: 'megapascals',
        },
        to_anchor: 1000,
    },
    hPa: {
        name: {
            singular: 'hectopascal',
            plural: 'hectopascals',
        },
        to_anchor: 1 / 10,
    },
    bar: {
        name: {
            singular: 'bar',
            plural: 'bar',
        },
        to_anchor: 100,
    },
    torr: {
        name: {
            singular: 'torr',
            plural: 'torr',
        },
        to_anchor: 101325 / 760000,
    },
};
var imperial = {
    psi: {
        name: {
            singular: 'pound per square inch',
            plural: 'pounds per square inch',
        },
        to_anchor: 1 / 1000,
    },
    ksi: {
        name: {
            singular: 'kilopound per square inch',
            plural: 'kilopound per square inch',
        },
        to_anchor: 1,
    },
    inHg: {
        name: {
            singular: 'Inch of mercury',
            plural: 'Inches of mercury',
        },
        to_anchor: 0.000491154,
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
                ratio: 0.00014503768078,
            },
        },
        imperial: {
            metric: {
                ratio: 1 / 0.00014503768078,
            },
        },
    },
};
export default measure;
