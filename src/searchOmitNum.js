export default function searchOmitNum(arr, lower, upper) {
    const realSum = arr.reduce((prev, item) => {
        return prev + item;
    }, 0);

    const expectSum = (lower + upper) / 2 * (upper - lower + 1);

    return expectSum - realSum;
}