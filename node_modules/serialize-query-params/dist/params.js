import * as Serialize from "./serialize";
const StringParam = {
  encode: Serialize.encodeString,
  decode: Serialize.decodeString
};
const createEnumParam = (enumValues) => ({
  encode: Serialize.encodeString,
  decode: (input) => Serialize.decodeEnum(input, enumValues)
});
const createEnumArrayParam = (enumValues) => ({
  encode: (text) => Serialize.encodeArray(text == null || Array.isArray(text) ? text : [text]),
  decode: (input) => Serialize.decodeArrayEnum(input, enumValues)
});
const createEnumDelimitedArrayParam = (enumValues, entrySeparator = "_") => ({
  encode: (text) => Serialize.encodeDelimitedArray(
    text == null || Array.isArray(text) ? text : [text],
    entrySeparator
  ),
  decode: (input) => Serialize.decodeDelimitedArrayEnum(input, enumValues, entrySeparator)
});
const NumberParam = {
  encode: Serialize.encodeNumber,
  decode: Serialize.decodeNumber
};
const ObjectParam = {
  encode: Serialize.encodeObject,
  decode: Serialize.decodeObject
};
const ArrayParam = {
  encode: Serialize.encodeArray,
  decode: Serialize.decodeArray
};
const NumericArrayParam = {
  encode: Serialize.encodeNumericArray,
  decode: Serialize.decodeNumericArray
};
const JsonParam = {
  encode: Serialize.encodeJson,
  decode: Serialize.decodeJson
};
const DateParam = {
  encode: Serialize.encodeDate,
  decode: Serialize.decodeDate,
  equals: (valueA, valueB) => {
    if (valueA === valueB)
      return true;
    if (valueA == null || valueB == null)
      return valueA === valueB;
    return valueA.getFullYear() === valueB.getFullYear() && valueA.getMonth() === valueB.getMonth() && valueA.getDate() === valueB.getDate();
  }
};
const DateTimeParam = {
  encode: Serialize.encodeDateTime,
  decode: Serialize.decodeDateTime,
  equals: (valueA, valueB) => {
    if (valueA === valueB)
      return true;
    if (valueA == null || valueB == null)
      return valueA === valueB;
    return valueA.valueOf() === valueB.valueOf();
  }
};
const BooleanParam = {
  encode: Serialize.encodeBoolean,
  decode: Serialize.decodeBoolean
};
const NumericObjectParam = {
  encode: Serialize.encodeNumericObject,
  decode: Serialize.decodeNumericObject
};
const DelimitedArrayParam = {
  encode: Serialize.encodeDelimitedArray,
  decode: Serialize.decodeDelimitedArray
};
const DelimitedNumericArrayParam = {
  encode: Serialize.encodeDelimitedNumericArray,
  decode: Serialize.decodeDelimitedNumericArray
};
export {
  ArrayParam,
  BooleanParam,
  DateParam,
  DateTimeParam,
  DelimitedArrayParam,
  DelimitedNumericArrayParam,
  JsonParam,
  NumberParam,
  NumericArrayParam,
  NumericObjectParam,
  ObjectParam,
  StringParam,
  createEnumArrayParam,
  createEnumDelimitedArrayParam,
  createEnumParam
};
//# sourceMappingURL=params.js.map
