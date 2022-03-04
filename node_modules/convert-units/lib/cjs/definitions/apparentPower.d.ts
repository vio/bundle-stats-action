import { Measure } from './../index';
export declare type ApparentPowerUnits = ApparentPowerMetricUnits;
export declare type ApparentPowerSystems = 'SI';
export declare type ApparentPowerMetricUnits = 'VA' | 'mVA' | 'kVA' | 'MVA' | 'GVA';
declare const measure: Measure<ApparentPowerSystems, ApparentPowerUnits>;
export default measure;
