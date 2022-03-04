import { Measure } from './../index';
export declare type ChargeUnits = ChargeSIUnits;
export declare type ChargeSystems = 'SI';
export declare type ChargeSIUnits = 'c' | 'mC' | 'μC' | 'nC' | 'pC';
declare const measure: Measure<ChargeSystems, ChargeUnits>;
export default measure;
