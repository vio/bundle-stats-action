import { Measure } from './../index';
export declare type VolumeUnits = VolumeMetricUnits | VolumeImperialUnits;
export declare type VolumeSystems = 'metric' | 'imperial';
export declare type VolumeMetricUnits = 'mm3' | 'cm3' | 'ml' | 'l' | 'kl' | 'm3' | 'km3' | 'cl' | 'dl' | 'krm' | 'tsk' | 'msk' | 'kkp' | 'glas' | 'kanna';
export declare type VolumeImperialUnits = 'tsp' | 'Tbs' | 'in3' | 'fl-oz' | 'cup' | 'pnt' | 'qt' | 'gal' | 'ft3' | 'yd3';
declare const measure: Measure<VolumeSystems, VolumeUnits>;
export default measure;
