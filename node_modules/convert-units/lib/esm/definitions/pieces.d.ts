import { Measure } from './../index';
export declare type PiecesUnits = PiecesUnitUnits;
export declare type PiecesSystems = 'unit';
export declare type PiecesUnitUnits = 'pcs' | 'bk-doz' | 'cp' | 'doz-doz' | 'doz' | 'gr-gr' | 'gros' | 'half-dozen' | 'long-hundred' | 'ream' | 'scores' | 'sm-gr' | 'trio';
declare const measure: Measure<PiecesSystems, PiecesUnits>;
export default measure;
