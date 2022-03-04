import { Measure } from './../index';
export declare type CurrentUnits = CurrentSIUnits;
export declare type CurrentSystems = 'SI';
export declare type CurrentSIUnits = 'A' | 'mA' | 'kA';
declare const measure: Measure<CurrentSystems, CurrentUnits>;
export default measure;
