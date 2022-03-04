import { Measure } from './../index';
export declare type PowerUnits = PowerMetricUnits | PowerImperialUnits;
export declare type PowerSystems = 'metric' | 'imperial';
export declare type PowerMetricUnits = 'W' | 'mW' | 'kW' | 'MW' | 'GW' | 'PS';
export declare type PowerImperialUnits = 'Btu/s' | 'ft-lb/s' | 'hp';
declare const measure: Measure<PowerSystems, PowerUnits>;
export default measure;
