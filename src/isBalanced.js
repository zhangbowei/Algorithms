export default function isBalanced(str) {
    const rawArr = str.split('');

    const num = rawArr.reduce((prev, item) => {
        if (item === '{') {
            prev++;
        }
        if (item === '}') {
            prev--;
        }

        return prev;
    }, 0)

    return num === 0 ? true : false;
}


function isBalanced(str) {
    const rawArr = str.split('');
    const num = rawArr.reduce((prev, item) => {
        if (item === '{') {
            prev++;
        }
        if (item === '}') {
            prev--;
        }

        return prev;
    }, 0);

    return num === 0 ? true : false;
}

const num = rawArr.reduce((prev, item) => {
    if (item === '{') {
        prev ++;
    }
    if (item === '}') {
        prev --;
    }
    return prev;
}, 0)
