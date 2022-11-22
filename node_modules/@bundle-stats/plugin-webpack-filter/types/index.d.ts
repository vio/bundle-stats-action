import { StatsCompilation } from 'webpack';
interface BundleStatsOptions {
    pathIgnorePattern?: string;
}
export interface WebpackStatsFilteredAsset {
    name: string;
    size?: number;
}
export interface WebpackStatsFilteredChunk {
    entry: boolean;
    id: number | string;
    initial: boolean;
    files?: Array<string>;
    names?: Array<string>;
}
export interface WebpackStatsFilteredModule {
    name: string;
    size?: number;
    chunks: Array<string | number>;
}
export interface WebpackStatsFilteredConcatenatedModule {
    name: string;
    size?: number;
}
export interface WebpackStatsFilteredRootModule extends WebpackStatsFilteredModule {
    modules?: Array<WebpackStatsFilteredConcatenatedModule>;
}
export interface WebpackStatsFiltered {
    builtAt?: number;
    hash?: string;
    assets?: Array<WebpackStatsFilteredAsset>;
    chunks?: Array<WebpackStatsFilteredChunk>;
    modules?: Array<WebpackStatsFilteredRootModule>;
}
declare const _default: (source: StatsCompilation, options?: BundleStatsOptions) => WebpackStatsFiltered;
export default _default;
