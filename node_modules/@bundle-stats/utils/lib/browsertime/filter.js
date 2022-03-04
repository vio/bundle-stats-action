"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const get_1 = __importDefault(require("lodash/get"));
const merge_1 = __importDefault(require("lodash/merge"));
const pick_1 = __importDefault(require("lodash/pick"));
const set_1 = __importDefault(require("lodash/set"));
const META_KEYS = [
    'info.browsertime.version',
    'info.timestamp',
    'info.url',
];
const METRICS_KEYS = [
    'statistics.timings.firstPaint',
    'statistics.timings.fullyLoaded',
    'statistics.timings.pageTimings.backEndTime',
    'statistics.timings.pageTimings.domContentLoadedTime',
    'statistics.timings.pageTimings.domInteractiveTime',
    'statistics.timings.pageTimings.domainLookupTime',
    'statistics.timings.pageTimings.frontEndTime',
    'statistics.timings.pageTimings.pageDownloadTime',
    'statistics.timings.pageTimings.pageLoadTime',
    'statistics.timings.pageTimings.redirectionTime',
    'statistics.timings.pageTimings.serverConnectionTime',
    'statistics.timings.pageTimings.serverResponseTime',
    'statistics.timings.paintTiming.first-contentful-paint',
    'statistics.timings.rumSpeedIndex',
    'statistics.visualMetrics.FirstVisualChange',
    'statistics.visualMetrics.LastVisualChange',
    'statistics.visualMetrics.PerceptualSpeedIndex',
    'statistics.visualMetrics.SpeedIndex',
    'statistics.visualMetrics.VisualComplete85',
    'statistics.visualMetrics.VisualComplete95',
    'statistics.visualMetrics.VisualComplete99',
];
const filter = (browsertimeSource) => {
    const meta = META_KEYS.reduce((agg, key) => {
        const metaData = (0, get_1.default)(browsertimeSource, [0, ...key.split('.')], '');
        const filteredMetaData = (0, set_1.default)({}, key, metaData);
        return (0, merge_1.default)({}, agg, filteredMetaData);
    }, {});
    const metrics = METRICS_KEYS.reduce((agg, key) => {
        const metricData = (0, pick_1.default)((0, get_1.default)(browsertimeSource, [0, ...key.split('.')], {}), ['median']);
        const filteredMetricData = (0, set_1.default)({}, key, metricData);
        return (0, merge_1.default)({}, agg, filteredMetricData);
    }, {});
    return { ...meta, ...metrics };
};
exports.filter = filter;
//# sourceMappingURL=filter.js.map