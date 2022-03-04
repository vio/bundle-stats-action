var metric = {
    C: {
        name: {
            singular: 'degree Celsius',
            plural: 'degrees Celsius',
        },
        to_anchor: 1,
        anchor_shift: 0,
    },
    K: {
        name: {
            singular: 'degree Kelvin',
            plural: 'degrees Kelvin',
        },
        to_anchor: 1,
        anchor_shift: 273.15,
    },
};
var imperial = {
    F: {
        name: {
            singular: 'degree Fahrenheit',
            plural: 'degrees Fahrenheit',
        },
        to_anchor: 1,
    },
    R: {
        name: {
            singular: 'degree Rankine',
            plural: 'degrees Rankine',
        },
        to_anchor: 1,
        anchor_shift: 459.67,
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
                transform: function (C) {
                    return C / (5 / 9) + 32;
                },
            },
        },
        imperial: {
            metric: {
                transform: function (F) {
                    return (F - 32) * (5 / 9);
                },
            },
        },
    },
};
export default measure;
