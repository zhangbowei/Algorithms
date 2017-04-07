import assert from 'assert';
import searchOmitNum from '../src/searchOmitNum';

describe('寻找遗漏数字', function () {

    it('基本测试用例', function () {
        const input = [2, 5, 1, 4, 9, 6, 3, 7];
        const res = searchOmitNum(input, 1, 9);

        assert.equal(res, 8);
    });

    it('边界测试用例', function () {
        const input = [0];
        const res = searchOmitNum(input, 0, 0);

        assert.equal(res, 0);
    });
})
