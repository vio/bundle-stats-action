function getEncodedValue(input, allowEmptyString) {
  if (input == null) {
    return input;
  }
  if (input.length === 0 && (!allowEmptyString || allowEmptyString && input !== "")) {
    return null;
  }
  const str = input instanceof Array ? input[0] : input;
  if (str == null) {
    return str;
  }
  if (!allowEmptyString && str === "") {
    return null;
  }
  return str;
}
function getEncodedValueArray(input) {
  if (input == null) {
    return input;
  }
  return input instanceof Array ? input : input === "" ? [] : [input];
}
function encodeDate(date) {
  if (date == null) {
    return date;
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
}
function decodeDate(input) {
  const dateString = getEncodedValue(input);
  if (dateString == null)
    return dateString;
  const parts = dateString.split("-");
  if (parts[1] != null) {
    parts[1] -= 1;
  } else {
    parts[1] = 0;
    parts[2] = 1;
  }
  const decoded = new Date(...parts);
  if (isNaN(decoded.getTime())) {
    return null;
  }
  return decoded;
}
function encodeDateTime(date) {
  if (date == null) {
    return date;
  }
  return date.toISOString();
}
function decodeDateTime(input) {
  const dateString = getEncodedValue(input);
  if (dateString == null)
    return dateString;
  const decoded = new Date(dateString);
  if (isNaN(decoded.getTime())) {
    return null;
  }
  return decoded;
}
function encodeBoolean(bool) {
  if (bool == null) {
    return bool;
  }
  return bool ? "1" : "0";
}
function decodeBoolean(input) {
  const boolStr = getEncodedValue(input);
  if (boolStr == null)
    return boolStr;
  if (boolStr === "1") {
    return true;
  } else if (boolStr === "0") {
    return false;
  }
  return null;
}
function encodeNumber(num) {
  if (num == null) {
    return num;
  }
  return String(num);
}
function decodeNumber(input) {
  const numStr = getEncodedValue(input);
  if (numStr == null)
    return numStr;
  if (numStr === "")
    return null;
  const result = +numStr;
  return result;
}
function encodeString(str) {
  if (str == null) {
    return str;
  }
  return String(str);
}
function decodeString(input) {
  const str = getEncodedValue(input, true);
  if (str == null)
    return str;
  return String(str);
}
function decodeEnum(input, enumValues) {
  const str = decodeString(input);
  if (str == null)
    return str;
  return enumValues.includes(str) ? str : void 0;
}
function decodeArrayEnum(input, enumValues) {
  const arr = decodeArray(input);
  if (arr == null)
    return arr;
  if (!arr.length)
    return void 0;
  return arr.every((str) => str != null && enumValues.includes(str)) ? arr : void 0;
}
function decodeDelimitedArrayEnum(input, enumValues, entrySeparator = "_") {
  if (input != null && Array.isArray(input) && !input.length)
    return void 0;
  const arr = decodeDelimitedArray(input, entrySeparator);
  return decodeArrayEnum(arr, enumValues);
}
function encodeJson(any) {
  if (any == null) {
    return any;
  }
  return JSON.stringify(any);
}
function decodeJson(input) {
  const jsonStr = getEncodedValue(input);
  if (jsonStr == null)
    return jsonStr;
  let result = null;
  try {
    result = JSON.parse(jsonStr);
  } catch (e) {
  }
  return result;
}
function encodeArray(array) {
  if (array == null) {
    return array;
  }
  return array;
}
function decodeArray(input) {
  const arr = getEncodedValueArray(input);
  if (arr == null)
    return arr;
  return arr;
}
function encodeNumericArray(array) {
  if (array == null) {
    return array;
  }
  return array.map(String);
}
function decodeNumericArray(input) {
  const arr = decodeArray(input);
  if (arr == null)
    return arr;
  return arr.map((d) => d === "" || d == null ? null : +d);
}
function encodeDelimitedArray(array, entrySeparator = "_") {
  if (array == null) {
    return array;
  }
  return array.join(entrySeparator);
}
function decodeDelimitedArray(input, entrySeparator = "_") {
  const arrayStr = getEncodedValue(input, true);
  if (arrayStr == null)
    return arrayStr;
  if (arrayStr === "")
    return [];
  return arrayStr.split(entrySeparator);
}
const encodeDelimitedNumericArray = encodeDelimitedArray;
function decodeDelimitedNumericArray(arrayStr, entrySeparator = "_") {
  const decoded = decodeDelimitedArray(arrayStr, entrySeparator);
  if (decoded == null)
    return decoded;
  return decoded.map((d) => d === "" || d == null ? null : +d);
}
function encodeObject(obj, keyValSeparator = "-", entrySeparator = "_") {
  if (obj == null)
    return obj;
  if (!Object.keys(obj).length)
    return "";
  return Object.keys(obj).map((key) => `${key}${keyValSeparator}${obj[key]}`).join(entrySeparator);
}
function decodeObject(input, keyValSeparator = "-", entrySeparator = "_") {
  const objStr = getEncodedValue(input, true);
  if (objStr == null)
    return objStr;
  if (objStr === "")
    return {};
  const obj = {};
  const keyValSeparatorRegExp = new RegExp(`${keyValSeparator}(.*)`);
  objStr.split(entrySeparator).forEach((entryStr) => {
    const [key, value] = entryStr.split(keyValSeparatorRegExp);
    obj[key] = value;
  });
  return obj;
}
const encodeNumericObject = encodeObject;
function decodeNumericObject(input, keyValSeparator = "-", entrySeparator = "_") {
  const decoded = decodeObject(
    input,
    keyValSeparator,
    entrySeparator
  );
  if (decoded == null)
    return decoded;
  const decodedNumberObj = {};
  for (const key of Object.keys(decoded)) {
    decodedNumberObj[key] = decodeNumber(decoded[key]);
  }
  return decodedNumberObj;
}
export {
  decodeArray,
  decodeArrayEnum,
  decodeBoolean,
  decodeDate,
  decodeDateTime,
  decodeDelimitedArray,
  decodeDelimitedArrayEnum,
  decodeDelimitedNumericArray,
  decodeEnum,
  decodeJson,
  decodeNumber,
  decodeNumericArray,
  decodeNumericObject,
  decodeObject,
  decodeString,
  encodeArray,
  encodeBoolean,
  encodeDate,
  encodeDateTime,
  encodeDelimitedArray,
  encodeDelimitedNumericArray,
  encodeJson,
  encodeNumber,
  encodeNumericArray,
  encodeNumericObject,
  encodeObject,
  encodeString
};
//# sourceMappingURL=serialize.js.map
