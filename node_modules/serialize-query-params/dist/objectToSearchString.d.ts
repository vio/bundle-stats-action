import { EncodedQuery } from './types';
/**
 * Default implementation of objectToSearchString powered by URLSearchParams.
 * Does not support null values. Does not prefix with "?"
 * This converts an object { foo: '123', bar: 'x' } to a search string `?foo=123&bar=x`
 * This is only a very basic version, you may prefer the advanced versions offered
 * by third party libraries like query-string ("stringify") or qs.
 */
export declare function objectToSearchString(encodedParams: EncodedQuery): string;
