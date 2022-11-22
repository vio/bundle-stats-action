import { objectToSearchString } from "./objectToSearchString";
import { searchStringToObject } from ".";
const JSON_SAFE_CHARS = `{}[],":`.split("").map((d) => [d, encodeURIComponent(d)]);
function getHrefFromLocation(location, search) {
  let href = search;
  if (location.href) {
    try {
      const url = new URL(location.href);
      href = `${url.origin}${url.pathname}${search}`;
    } catch (e) {
      href = "";
    }
  }
  return href;
}
function transformSearchStringJsonSafe(searchString) {
  let str = searchString;
  for (let [char, code] of JSON_SAFE_CHARS) {
    str = str.replace(new RegExp("\\" + code, "g"), char);
  }
  return str;
}
function updateLocation(encodedQuery, location, objectToSearchStringFn = objectToSearchString) {
  let encodedSearchString = objectToSearchStringFn(encodedQuery);
  const search = encodedSearchString.length ? `?${encodedSearchString}` : "";
  const newLocation = {
    ...location,
    key: `${Date.now()}`,
    href: getHrefFromLocation(location, search),
    search,
    query: encodedQuery
  };
  return newLocation;
}
function updateInLocation(encodedQueryReplacements, location, objectToSearchStringFn = objectToSearchString, searchStringToObjectFn = searchStringToObject) {
  const currQuery = searchStringToObjectFn(location.search);
  const newQuery = {
    ...currQuery,
    ...encodedQueryReplacements
  };
  return updateLocation(newQuery, location, objectToSearchStringFn);
}
export {
  transformSearchStringJsonSafe,
  updateInLocation,
  updateLocation
};
//# sourceMappingURL=updateLocation.js.map
