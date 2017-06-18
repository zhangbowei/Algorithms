const _ = {};

const nativeKeys = Object.keys;
const hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
// IE < 9 下不能用 for in 来枚举的 key 值集合
const nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
const collectNonEnumProps = function (obj, keys) {
    return nonEnumerableProps.reduce(function (prev, item) {
        if (obj.item !== obj.__proto__[item] && !prev.includes(item)) {
            prev.push(item);
        }
    }, keys);
}

_.isObject = function (obj) {
    return obj && typeof obj === 'object';
}

_.has = function (obj, key) {
    return obj.hasOwnProperty(key);
}

_.keys = function (obj) {
    //对输入：不判断，就转换
    if (!_.isObject(obj)) return [];

    //有现成:直接用
    if (nativeKeys) return nativeKeys(obj);
    // 没现成：自己实现，注意兼容性, IE < 9.
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);

    return keys;
};

// Retrieve all the property names of an object.
_.allKeys = function (obj) {
    if (!_.isObject(obj)) return [];

    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);

    return keys;
};

const createAssigner = function (keysFunc, undefinedOnly) {
    return function (obj) {
        var length = arguments.length;
        if (length < 2 || obj == null) return obj;
        for (var index = 1; index < length; index++) {
            var source = arguments[index],
                keys = keysFunc(source),
                l = keys.length;

            for (var i = 0; i < l; i++) {
                var key = keys[i];
                if (!undefinedOnly || obj[key] === void 0)
                    obj[key] = source[key];
            }
        }

        return obj;
    };
};

_.extend = createAssigner(_.allKeys);
_.extendOwn = createAssigner(_.keys);
_.defaults = createAssigner(_.allKeys, true);