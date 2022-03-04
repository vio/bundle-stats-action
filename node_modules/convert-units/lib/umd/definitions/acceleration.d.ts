import { Measure } from './../index';
export declare type AccelerationUnits = AccelerationMetricUnits;
export declare type AccelerationSystems = 'metric';
export declare type AccelerationMetricUnits = 'g-force' | 'm/s2';
declare const measure: Measure<AccelerationSystems, AccelerationUnits>;
export default measure;
