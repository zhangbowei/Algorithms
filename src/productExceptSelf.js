export default function productExceptSelf(arr) {
    const rawArr = arr.slice();
    const bothProduct = rawArr.reduce((prev, item) => {
        item = item === 0 ? 1 : item;
        return prev * item;
    }, 1);
    const zeroNum = rawArr.reduce((prev, item) => {
        return item === 0 ? prev + 1 : prev;
    }, 0);

    const res = rawArr.map((item, index) => {
        if (zeroNum === 0) {
            return bothProduct/item;
        }

        if (zeroNum === 1) {
            return item === 0 ? bothProduct : 0;
        }

        return 0;
    })

    return res;
}

