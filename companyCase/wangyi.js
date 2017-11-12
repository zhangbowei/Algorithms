var inputArr = [
    // `11110101011111101011`,
    // `01`,
    // `10`,
    // `010`,
    // `101`,
    // `111`,
    // ``,
    // `0`,
    // `1`,
    // `00`,
    // ``,
    // `10101`,
    `0101010`,
    `1110111`,
    `0001000`,
    `0`,
    `111110`,
    `011111`
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
            return good.split(' ').map(function (item, index) {
                // 视情况而定，'32'.split(' ') = ['32']
                return (index === 0) ? item : +item;
            });
        });
    }

    var data = formatData(input);
    console.log(calculateMaxLen(data[0][0]));

    function calculateMaxLen(dataStr) {
        var dataArr = dataStr.split('');
        return dataArr.reduce(function(stock, good) {
            if(stock.prev !== good) {
                ++ stock.num;
                stock.prev = good;
            } else {
                stock.num = 1;
            }
            stock.max = Math.max(stock.num, stock.max);
            return stock;
        }, {num: 0, prev: '', max: 0}).max;
    }
}


//找结构，找边界，找次数，找方法(排列/组合)
//test input
//> Math.pow(10, 1/3)
// 2.154434690031884
//考虑边界条件 就如 考虑 网站安全问题
var inputArr = [
    // `abcd12345ed125ss123058789`,
    // `abcd`,
    // `12345788  88888`,
    // `a1234ba1235`,
    // `adfasfsadfas`,
    // `  `,
    `3 3 1 1`
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
            return good.split(' ').map(function (item, index) {
                return +item;
            });
        });
    }

    var data = formatData(input);

    console.log(solve(data[0]));

    function solve(dataArr) {
        var s = dataArr[0], a = dataArr[1], b = dataArr[2], c = dataArr[3];
        var f = [];
        for (var i = 0; i <= s; ++i) {
          f[i] = [];
          for (var j = 0; j <= a; ++j) {
            f[i][j] = [];
            for (var k = 0; k <= b; ++k) {
              f[i][j][k] = [];
              for (var l = 0; l <= c; ++l) {
                f[i][j][k][l] = 0;
                if (i == 0 && j == 0 && k == 0 && l == 0) f[i][j][k][l] = 1;
                if (i > 0) {
                  if (j > 0) f[i][j][k][l] = (f[i][j][k][l] + f[i-1][j-1][k][l]) % 1000000007;
                  if (k > 0) f[i][j][k][l] = (f[i][j][k][l] + f[i-1][j][k-1][l]) % 1000000007;
                  if (l > 0) f[i][j][k][l] = (f[i][j][k][l] + f[i-1][j][k][l-1]) % 1000000007;
                  if (j > 0 && k > 0) f[i][j][k][l] = (f[i][j][k][l] + f[i-1][j-1][k-1][l]) % 1000000007;
                  if (j > 0 && l > 0) f[i][j][k][l] = (f[i][j][k][l] + f[i-1][j-1][k][l-1]) % 1000000007;
                  if (k > 0 && l > 0) f[i][j][k][l] = (f[i][j][k][l] + f[i-1][j][k-1][l-1]) % 1000000007;
                  if (j > 0 && k > 0 && l > 0) f[i][j][k][l] = (f[i][j][k][l] + f[i-1][j-1][k-1][l-1]) % 1000000007;
                }
              }
            }
          }
        }
        return f[s][a][b][c];
      }
}





