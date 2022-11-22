import { EncodedQuery } from './types';
import { objectToSearchString } from './objectToSearchString';
import { searchStringToObject } from '.';
export declare function transformSearchStringJsonSafe(searchString: string): string;
/**
 * Update a location, wiping out parameters not included in encodedQuery
 * If a param is set to undefined it will be removed from the URL.
 */
export declare function updateLocation(encodedQuery: EncodedQuery, location: Location, objectToSearchStringFn?: typeof objectToSearchString): Location;
/**
 * Update a location while retaining existing parameters.
 * If a param is set to undefined it will be removed from the URL.
 */
export declare function updateInLocation(encodedQueryReplacements: EncodedQuery, location: Location, objectToSearchStringFn?: typeof objectToSearchString, searchStringToObjectFn?: typeof searchStringToObject): Location;
