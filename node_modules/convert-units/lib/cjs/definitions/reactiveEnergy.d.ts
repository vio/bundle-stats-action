import { Measure } from './../index';
export declare type ReactiveEnergyUnits = ReactiveEnergySIUnits;
export declare type ReactiveEnergySystems = 'SI';
export declare type ReactiveEnergySIUnits = 'VARh' | 'mVARh' | 'kVARh' | 'MVARh' | 'GVARh';
declare const measure: Measure<ReactiveEnergySystems, ReactiveEnergyUnits>;
export default measure;
