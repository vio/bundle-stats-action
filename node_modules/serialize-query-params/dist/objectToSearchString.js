function objectToSearchString(encodedParams) {
  const params = new URLSearchParams();
  const entries = Object.entries(encodedParams);
  for (const [key, value] of entries) {
    if (value === void 0)
      continue;
    if (value === null)
      continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        params.append(key, item != null ? item : "");
      }
    } else {
      params.append(key, value);
    }
  }
  return params.toString();
}
export {
  objectToSearchString
};
//# sourceMappingURL=objectToSearchString.js.map
