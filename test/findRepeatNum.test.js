import assert from 'assert';
import findRepeatNum from '../src/findRepeatNum';

describe('数组中元素的重复次数', function () {

    it('基本测试用例', function () {
        const input = [1, 2, '3', 3, '3', 3];
        const res = findRepeatNum(input);
        assert.deepEqual(res, [{ 'number:3': 2 }, { 'string:3': 2 }, { 'number:2': 1 }, { 'number:1': 1 }]);
    });

    it('边界测试用例', function () {
        const input = [];
        const res = findRepeatNum(input);
        assert.deepEqual(res, []);
    });

})
