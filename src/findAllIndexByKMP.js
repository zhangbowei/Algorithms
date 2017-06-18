function findAllIndexByKMP(parentStr, childStr) {
    function productMatchChart(goodArr) {
        function findEqualItemMaxLen(prefixArr, suffixArr) {
            return prefixArr.reduce(function (prev, item) {
                return (suffixArr.includes(item) && item.length > prev) ? item.length : prev;
            }, 0);
        }
        function getSubset(elementArr) {
            return elementArr.reduce(function (prev, item, index) {
                return index === elementArr.length - 1 ? prev : prev.concat(elementArr.slice(0, index + 1).join(''));
            }, []);
        }

        return goodArr.reduce(function (stock, good, tag) {
            if (tag !== 0) {
                const elementArr = goodArr.slice(0, tag + 1);
                const prefix = getSubset(elementArr);
                const suffix = getSubset(elementArr.slice().reverse()).map(function (item) {
                    return item.split('').reverse().join('');
                });
                stock.push(findEqualItemMaxLen(prefix, suffix));
            }
            return stock;
        }, [0, 0]);
    }

    function findEqualLen(itemA, itemB) {
        let len = 0;
        for (let i = 0; i < itemA.length; ++i) {
            if (itemB[i] === itemA[i]) {
                ++len;
            } else {
                break;
            }
        }
        return len;
    }

    const chart = productMatchChart(childStr.split(''));
    let index = 0;

    return parentStr.split('').reduce(function (stock, good, tag) {
        if (tag === index) {
            const templateStr = parentStr.slice(tag, tag + childStr.length);
            if (templateStr === childStr) {
                stock.push(tag);
            } else {
                index = index + chart[findEqualLen(templateStr, childStr)];
            }
            ++index;
        }
        return stock;
    }, []);
}

const res = findAllIndexByKMP('BBC ABCDAB ABCDABCDABDEABCDABD', "ABCDABD");
console.log(res);
