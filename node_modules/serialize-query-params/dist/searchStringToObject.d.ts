import { EncodedQuery } from './types';
/**
 * Default implementation of searchStringToObject powered by URLSearchParams
 * This converts a search string like `?foo=123&bar=x` to { foo: '123', bar: 'x' }
 * This is only a very basic version, you may prefer the advanced versions offered
 * by third party libraries like query-string ("parse") or qs.
 */
export declare function searchStringToObject(searchString: string): EncodedQuery;
