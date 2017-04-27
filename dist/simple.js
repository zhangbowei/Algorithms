"use strict"; // function getMinSortNum(dataArr) {
//     const finishRule = JSON.stringify(dataArr.slice().sort((a, b) => a - b));
//     const len = dataArr.length;
//     const rawArr = dataArr.slice();
//     const newArr = [];
//     let num = 0, pass = false;

//     for (let i = 0; i < len; ++i) {
//         if (JSON.stringify(rawArr.concat(newArr)) === finishRule) {
//             pass = true;
//             break;
//         }
//         let max = Math.max.apply(null, rawArr);
//         rawArr.splice(rawArr.indexOf(max), 1);
//         newArr.push(max);
//         ++num;
//     }

//     return pass ? num : len - 1;
// }
function getMinSortNum(dataArr, lastMin) {
    var rawArr = dataArr.slice();
    var min = Math.min.apply(null, rawArr);
    var tag = rawArr.indexOf(min);
    if (dataArr.length === 0) return 0;
    if (dataArr.length === 1) return lastMin === min ? 0 : 1;
    if (lastMin === void 0 && JSON.stringify(dataArr) === JSON.stringify(rawArr.slice().sort(function (a, b) {return a - b;}))) return 0;

    return tag + getMinSortNum(rawArr.slice(tag + 1), min);
}
console.log(getMinSortNum([19, 7, 8, 25, 25]));
// console.log(getMinSortNum([4, 3, 2, 1, 0]));
// console.log(getMinSortNum([1, 1, 0, 1, 0]));
// console.log(getMinSortNum([0, 0, 0, 0, 0]));
// console.log(getMinSortNum([1, 2, 3, 4, 5]));