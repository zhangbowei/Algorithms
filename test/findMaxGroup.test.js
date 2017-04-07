import assert from 'assert';
import findMaxGroup from '../src/findMaxGroup';

describe('数组最大值组合', function () {

    it('基本测试用例', function () {
        const input = [-10, 7, 29, 30, 5, -10, -70];
        const res = findMaxGroup(input, 3);
        assert.equal(res, 21000);
    });

    it('边界测试用例', function () {
        const input = [1, 0, -1];
        const res = findMaxGroup(input, 0);
        assert.equal(res, -Infinity);
    });

})
