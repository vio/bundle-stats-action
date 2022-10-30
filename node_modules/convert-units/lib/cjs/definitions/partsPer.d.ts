import { Measure } from './../index';
export declare type PartsPerUnits = PartsPerSIUnits;
export declare type PartsPerSystems = 'SI';
export declare type PartsPerSIUnits = 'ppm' | 'ppb' | 'ppt' | 'ppq';
declare const measure: Measure<PartsPerSystems, PartsPerUnits>;
export default measure;
