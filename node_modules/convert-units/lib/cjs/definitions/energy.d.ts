import { Measure } from './../index';
export declare type EnergyUnits = EnergySIUnits;
export declare type EnergySystems = 'SI';
export declare type EnergySIUnits = 'Wh' | 'mWh' | 'kWh' | 'MWh' | 'GWh' | 'J' | 'kJ';
declare const measure: Measure<EnergySystems, EnergyUnits>;
export default measure;
