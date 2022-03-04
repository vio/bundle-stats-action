import { Measure } from './../index';
export declare type VoltageUnits = VoltageSIUnits;
export declare type VoltageSystems = 'SI';
export declare type VoltageSIUnits = 'V' | 'mV' | 'kV';
declare const measure: Measure<VoltageSystems, VoltageUnits>;
export default measure;
