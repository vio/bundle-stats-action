import { Measure } from './../index';
export declare type FrequencyUnits = FrequencySIUnits;
export declare type FrequencySystems = 'SI';
export declare type FrequencySIUnits = 'mHz' | 'Hz' | 'kHz' | 'MHz' | 'GHz' | 'THz' | 'rpm' | 'deg/s' | 'rad/s';
declare const measure: Measure<FrequencySystems, FrequencyUnits>;
export default measure;
