import assert from 'assert';
import intersection from '../src/intersection';

describe('数组交集', function () {

    it('基本测试用例', function () {
        const inputA = [2, 2, 4, 1];
        const inputB = [1, 2, 0, 2];
        const res = intersection(inputA, inputB);

        assert.deepEqual(res, [2, 1]);
    });

    it('边界测试用例', function () {
        const inputA = [2];
        const inputB = [1];
        const res = intersection(inputA, inputB);

        assert.deepEqual(res, []);
    });
})
