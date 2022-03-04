import { Measure } from './../index';
export declare type AngleUnits = AngleSIUnits;
export declare type AngleSystems = 'SI';
export declare type AngleSIUnits = 'rad' | 'deg' | 'grad' | 'arcmin' | 'arcsec';
declare const measure: Measure<AngleSystems, AngleUnits>;
export default measure;
