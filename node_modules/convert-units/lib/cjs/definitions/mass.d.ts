import { Measure } from './../index';
export declare type MassUnits = MassMetricUnits | MassImperialUnits;
export declare type MassSystems = 'metric' | 'imperial';
export declare type MassMetricUnits = 'mcg' | 'mg' | 'g' | 'kg' | 'mt';
export declare type MassImperialUnits = 'oz' | 'lb' | 't';
declare const measure: Measure<MassSystems, MassUnits>;
export default measure;
