function parse(obj, str) {
    str.replace('[', '.').replace(']', '').split('.').map((ele) => {
        obj = obj[ele.trim()]
    });

    return obj || 'undefined';
}

var object = {
 b: { c: 4 }, d: [{ e: 5 }, { e: 6 }]
};
console.log( parse(object, 'd[0].e') == 5 ) //true