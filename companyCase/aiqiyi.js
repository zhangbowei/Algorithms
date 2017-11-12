var inputArr = [
    // `abcd12345ed125ss123058789`,
    // `abcd`,
    // `12345788  88888`,
    // `a1234ba1235`,
    // `adfasfsadfas`,
    // `  `,
    // `1010 3 101010 2`,
    // `10 3 02 6`,
    `10 4 1010 2`
    // `1010 4 101010101010101011 1`,
    // ``
    // `a1b2c3`,
    // `a0000009fdsafdc9932993f333333333`
    // `''`,
    // ``
];

inputArr.forEach(function (input, index) {
    // console.log(index);
    // console.log('input: ', input);
    doIt(input.split('\n'));
});

//submit this
/* Array.isArray(dataArr)不能用
*/
function doIt(input) {
    function formatData(rawData) {
        return rawData.map(function (good) {
            return good.split(' ');
        });
    }

    var data = formatData(input);
    //小心，有时候90%，因为空串不输出
    console.log(compareNum(data[0]));
    function compareNum(dataArr) {
        function getNoZeroLen(data, num) {
            var len = 0, index = -1;

            for (var i = 0; i < data.length; ++i) {
                if (data[i] !== '0') {
                    index = i;
                    break;
                }
            }
            if (index !== -1) {
                len = data.length * num - index;
            } else {
                len = 0;
            }

            return len;
        }
        function getHead(dataArr) {
            dataArr = dataArr.slice();
            for (var i = 0; i < dataArr.length; ++i) {
                if (dataArr[i] !== '0') {
                    break;
                }
                dataArr.shift();
            }
            return dataArr;
        }

        var strA = dataArr[0].split(''), numA = +dataArr[1];
        var strB = dataArr[2].split(''), numB = +dataArr[3];
        var startA = getHead(strA);
        var startB = getHead(strB);
        var lenA = getNoZeroLen(strA, numA);
        var lenB = getNoZeroLen(strB, numB);

        if (lenA !== lenB) {
            return lenA > lenB ? 'Greater' : 'Less';
        }


        var res = 'Equal';

        while (true) {
            if (numB === 0 && startA.length === 0) {
                break;
            }
            if (startA[0] > startB[0]) {
                res = 'Greater';
                break;
            }
            if (startA[0] < startB[0]) {
                res = 'Less';
                break;
            }
            if (startA.length === 0) {
                if (numA !== 0) {
                    startA = strA.slice();
                    --numA;
                }
            }
            if (startB.length === 0) {
                if (numB !== 0) {
                    startB = strB.slice();
                    --numB;
                }
            }
            startA.shift();
            startB.shift();
        }

        return res;

    }
}