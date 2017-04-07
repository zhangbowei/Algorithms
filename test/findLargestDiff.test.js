import assert from 'assert';
import findLargestDiff from '../src/findLargestDiff';

describe('数组中元素最大差值', function () {

    it('基本测试用例', function () {
        const input = [7, 8, 4, 9, 9, 15, 3, 1, 10];
        const res = findLargestDiff(input);

        assert.equal(res, 11);
    });

    it('边界测试用例', function () {
        const input = [0];
        const res = findLargestDiff(input);

        assert.equal(res, -Infinity);
    });

    it('边界测试用例', function () {
        const input = [];
        const res = findLargestDiff(input);

        assert.equal(res, -Infinity);
    });
})
