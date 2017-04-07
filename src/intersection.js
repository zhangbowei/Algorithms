export default function intersection(arrA, arrB) {
    const rawArrA = arrA.slice();
    const rawArrB = arrB.slice();
    const res = [];

    rawArrA.forEach((item) => {
        if (rawArrB.includes(item) && !res.includes(item)) {
            res.push(item);
        }
    })

    return res;
}
