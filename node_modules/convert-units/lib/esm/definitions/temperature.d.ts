import { Measure } from './../index';
export declare type TemperatureUnits = TemperatureMetricUnits | TemperatureImperialUnits;
export declare type TemperatureSystems = 'metric' | 'imperial';
export declare type TemperatureMetricUnits = 'C' | 'K';
export declare type TemperatureImperialUnits = 'F' | 'R';
declare const measure: Measure<TemperatureSystems, TemperatureUnits>;
export default measure;
