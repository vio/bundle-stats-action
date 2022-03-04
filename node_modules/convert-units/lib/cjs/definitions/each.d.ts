import { Measure } from './../index';
export declare type EachUnits = EachMetricUnits;
export declare type EachSystems = 'metric';
export declare type EachMetricUnits = 'ea' | 'dz';
declare const measure: Measure<EachSystems, EachUnits>;
export default measure;
