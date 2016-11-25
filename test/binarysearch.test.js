import assert from 'assert';
import binarysearch from '../src/binarysearch';

describe('归并排序', function () {

    it('基本测试用例', function () {
        let input = [1, 3, 2];
        let res = binarysearch(2, input);
        assert.deepEqual(res, 2);
    });

})
