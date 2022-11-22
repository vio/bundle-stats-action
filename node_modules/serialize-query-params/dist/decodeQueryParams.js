function decodeQueryParams(paramConfigMap, encodedQuery) {
  const decodedQuery = {};
  const paramNames = Object.keys(paramConfigMap);
  for (const encodedKey of Object.keys(encodedQuery)) {
    if (paramConfigMap[encodedKey] == null) {
      paramNames.push(encodedKey);
    }
  }
  for (const paramName of paramNames) {
    const encodedValue = encodedQuery[paramName];
    if (!paramConfigMap[paramName]) {
      if (true) {
        console.warn(
          `Passing through parameter ${paramName} during decoding since it was not configured.`
        );
      }
      decodedQuery[paramName] = encodedValue;
    } else {
      decodedQuery[paramName] = paramConfigMap[paramName].decode(encodedValue);
    }
  }
  return decodedQuery;
}
export {
  decodeQueryParams
};
//# sourceMappingURL=decodeQueryParams.js.map
