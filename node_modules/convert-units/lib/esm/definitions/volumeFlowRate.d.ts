import { Measure } from './../index';
export declare type VolumeFlowRateUnits = VolumeFlowRateMetricUnits | VolumeFlowRateImperialUnits;
export declare type VolumeFlowRateSystems = 'metric' | 'imperial';
export declare type VolumeFlowRateMetricUnits = 'mm3/s' | 'cm3/s' | 'ml/s' | 'cl/s' | 'dl/s' | 'l/s' | 'l/min' | 'l/h' | 'kl/s' | 'kl/min' | 'kl/h' | 'm3/s' | 'm3/min' | 'm3/h' | 'km3/s';
export declare type VolumeFlowRateImperialUnits = 'tsp/s' | 'Tbs/s' | 'in3/s' | 'in3/min' | 'in3/h' | 'fl-oz/s' | 'fl-oz/min' | 'fl-oz/h' | 'cup/s' | 'pnt/s' | 'pnt/min' | 'pnt/h' | 'qt/s' | 'gal/s' | 'gal/min' | 'gal/h' | 'ft3/s' | 'ft3/min' | 'ft3/h' | 'yd3/s' | 'yd3/min' | 'yd3/h';
declare const measure: Measure<VolumeFlowRateSystems, VolumeFlowRateUnits>;
export default measure;
