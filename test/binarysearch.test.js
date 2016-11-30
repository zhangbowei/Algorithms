import assert from 'assert';
import binarysearch from '../src/binarysearch';

describe('归并排序', function () {

    it('基本测试用例', function () {
        let input = [8, 6, 5, 3, 2, 0];
        let res = binarysearch(6, input);
        assert.equal(res, 1);
    });

    it('边界测试用例', function () {
        let input = [4, 3, 2, 0];
        let res = binarysearch(0, input);
        assert.equal(res, 3);
    });

})
