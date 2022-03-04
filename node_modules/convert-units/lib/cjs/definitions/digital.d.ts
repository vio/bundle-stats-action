import { Measure } from './../index';
export declare type DigitalUnits = DigitalBitsUnits | DigitalBytesUnits;
export declare type DigitalSystems = 'bits' | 'bytes';
export declare type DigitalBitsUnits = 'b' | 'Kb' | 'Mb' | 'Gb' | 'Tb';
export declare type DigitalBytesUnits = 'B' | 'KB' | 'MB' | 'GB' | 'TB';
declare const measure: Measure<DigitalSystems, DigitalUnits>;
export default measure;
