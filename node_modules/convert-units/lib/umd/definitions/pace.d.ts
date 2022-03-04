import { Measure } from './../index';
export declare type PaceUnits = PaceMetricUnits | PaceImperialUnits;
export declare type PaceSystems = 'metric' | 'imperial';
export declare type PaceMetricUnits = 'min/km' | 's/m';
export declare type PaceImperialUnits = 'min/mi' | 's/ft';
declare const measure: Measure<PaceSystems, PaceUnits>;
export default measure;
