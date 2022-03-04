import { Measure } from './../index';
export declare type IlluminanceUnits = IlluminanceMetricUnits | IlluminanceImperialUnits;
export declare type IlluminanceSystems = 'metric' | 'imperial';
export declare type IlluminanceMetricUnits = 'lx';
export declare type IlluminanceImperialUnits = 'ft-cd';
declare const measure: Measure<IlluminanceSystems, IlluminanceUnits>;
export default measure;
