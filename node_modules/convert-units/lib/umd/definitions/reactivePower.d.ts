import { Measure } from './../index';
export declare type ReactivePowerUnits = ReactivePowerSIUnits;
export declare type ReactivePowerSystems = 'SI';
export declare type ReactivePowerSIUnits = 'VAR' | 'mVAR' | 'kVAR' | 'MVAR' | 'GVAR';
declare const measure: Measure<ReactivePowerSystems, ReactivePowerUnits>;
export default measure;
