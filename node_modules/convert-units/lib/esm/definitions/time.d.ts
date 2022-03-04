import { Measure } from './../index';
export declare type TimeUnits = TimeSIUnits;
export declare type TimeSystems = 'SI';
export declare type TimeSIUnits = 'ns' | 'mu' | 'ms' | 's' | 'min' | 'h' | 'd' | 'week' | 'month' | 'year';
declare const measure: Measure<TimeSystems, TimeUnits>;
export default measure;
