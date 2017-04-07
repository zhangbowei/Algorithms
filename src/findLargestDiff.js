export default function findLargestDiff(array) {
    const rawArr = array.slice();
    const res = [];

    rawArr.reduce((prev, item, index) => {
        res.push(item - prev);
        return item < prev ? item : prev;
    }, Infinity);

    return Math.max.apply(null, res);
}
