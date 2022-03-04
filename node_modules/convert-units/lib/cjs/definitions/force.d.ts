import { Measure } from './../index';
export declare type ForceUnits = ForceSIUnits;
export declare type ForceSystems = 'SI';
export declare type ForceSIUnits = 'N' | 'kN' | 'lbf';
declare const measure: Measure<ForceSystems, ForceUnits>;
export default measure;
