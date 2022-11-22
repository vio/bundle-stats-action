function withDefault(param, defaultValue, includeNull = true) {
  const decodeWithDefault = (...args) => {
    const decodedValue = param.decode(...args);
    if (decodedValue === void 0) {
      return defaultValue;
    }
    if (includeNull) {
      if (decodedValue === null) {
        return defaultValue;
      } else {
        return decodedValue;
      }
    }
    return decodedValue;
  };
  return { ...param, default: defaultValue, decode: decodeWithDefault };
}
var withDefault_default = withDefault;
export {
  withDefault_default as default,
  withDefault
};
//# sourceMappingURL=withDefault.js.map
