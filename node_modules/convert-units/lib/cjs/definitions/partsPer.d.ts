import { Measure } from './../index';
export declare type PartsPerUnits = PArtsPerSIUnits;
export declare type PartsPerSystems = 'SI';
export declare type PArtsPerSIUnits = 'ppm' | 'ppb' | 'ppt' | 'ppq';
declare const measure: Measure<PartsPerSystems, PartsPerUnits>;
export default measure;
