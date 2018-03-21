var _ = require('lodash');
(function test() {
    var s = [
        [0, 1, 0, 0, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [1, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 1, 0],
    ];
    function c(dd, num) {
        var d = _.cloneDeep(dd);
        if (num === 0)
            return dd;
        for (var i = 0; i < d.length; i++)
            for (var j = 0; j < d[0].length; j++) {
                dd[i][j] = 0;
                for (var k = 0; k < d[0].length; k++)
                    dd[i][j] += d[i][k] * s[k][j];
            }
        return c(dd, --num);
    }
    function sum(s1, s2){
        for (i = 0; i < s1.length; i++)
            for (j = 0; j < s1[0].length; j++)
                s1[i][j] += s2[i][j];
        return s1;
    }

    function print(d) {
        for (i = 0; i < d.length; i++) {
                console.log(d[i].join(' '));
            console.log('\n');
        }
    }
    var set = [s];
    var num = 5;
    for(var i = 1; i <= num; ++i) {
        set.push(c(_.cloneDeep(s), i));
        console.log(i);

    }
    var res = set.slice(1).reduce(function(prev, item) {
        return sum(prev, item);
    }, set[0])
    print(res);
})();
