import { Measure } from './../index';
export declare type LengthUnits = LengthMetricUnits | LengthImperialUnits;
export declare type LengthSystems = 'metric' | 'imperial';
export declare type LengthMetricUnits = 'nm' | 'μm' | 'mm' | 'cm' | 'm' | 'km';
export declare type LengthImperialUnits = 'in' | 'yd' | 'ft-us' | 'ft' | 'fathom' | 'mi' | 'nMi';
declare const measure: Measure<LengthSystems, LengthUnits>;
export default measure;
