export default function deepClone(obj) {
    let res = obj;

    if (Object.prototype.toString.call(obj) === '[object Object]') {
        res = {};
        for (let key in obj) {
            res[key] = deepClone(obj[key]);
        }
    }

    if (Object.prototype.toString.call(obj) === '[object Array]') {
        res = [];
        obj.map((item) => {
            res.push(deepClone(item));
        })
    }

    return res;
}