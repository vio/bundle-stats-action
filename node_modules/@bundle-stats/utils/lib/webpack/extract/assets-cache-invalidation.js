"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractAssetsCacheInvalidation = void 0;
const get_1 = __importDefault(require("lodash/get"));
const merge_1 = __importDefault(require("lodash/merge"));
const get_metric_changed_1 = require("../../report/get-metric-changed");
const merge_metrics_by_key_1 = require("../../report/merge-metrics-by-key");
const utils_1 = require("../utils");
const extractAssetsCacheInvalidation = (webpackStats, currentExtractedData, baselineBundleStats) => {
    const currentAssets = (0, get_1.default)(currentExtractedData, 'metrics.assets', {});
    const baselineAssets = (0, get_1.default)(baselineBundleStats, 'metrics.webpack.assets', {});
    const rows = (0, merge_metrics_by_key_1.mergeMetricsByKey)([currentAssets, baselineAssets]).map((row) => (0, merge_1.default)({}, row, {
        changed: (0, get_metric_changed_1.getMetricChanged)(row.runs),
        added: (0, utils_1.getMetricAdded)(row.runs),
        deleted: (0, utils_1.getMetricDeleted)(row.runs),
    }));
    const value = (0, utils_1.calculateCacheInvalidation)(rows);
    return {
        metrics: {
            cacheInvalidation: {
                value,
            },
        },
    };
};
exports.extractAssetsCacheInvalidation = extractAssetsCacheInvalidation;
//# sourceMappingURL=assets-cache-invalidation.js.map