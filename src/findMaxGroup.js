export default function findMaxGroup(originalArr, n) {
    const rawArr = originalArr.slice();
    const incrArr = rawArr.sort((a, b) => b > a).slice();
    const decrArr = rawArr.sort((a, b) => a > b).slice();
    const getProduct = function(arr) {
        return arr.reduce((prev, item) => prev * item, 1);
    };
    const res = [];

    for (let i=0; i < n; i=i+2) {
       res.push(getProduct(decrArr.slice(0, i)) * getProduct(incrArr.slice(0, n-i)));
    }

    return Math.max.apply(null, res);
}