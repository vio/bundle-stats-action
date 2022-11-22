function searchStringToObject(searchString) {
  const params = new URLSearchParams(searchString);
  const parsed = {};
  for (let [key, value] of params) {
    if (Object.prototype.hasOwnProperty.call(parsed, key)) {
      if (Array.isArray(parsed[key])) {
        parsed[key].push(value);
      } else {
        parsed[key] = [parsed[key], value];
      }
    } else {
      parsed[key] = value;
    }
  }
  return parsed;
}
export {
  searchStringToObject
};
//# sourceMappingURL=searchStringToObject.js.map
