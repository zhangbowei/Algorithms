import assert from 'assert';
import productExceptSelf from '../src/productExceptSelf';

describe('数组中元素乘积', function () {

    it('基本测试用例', function () {
        const input = [2, 2, 4, 1];
        const res = productExceptSelf(input);

        assert.deepEqual(res, [8, 8, 4, 16]);
    });

    it('边界测试用例', function () {
        const input = [0, 0, 0, 2];
        const res = productExceptSelf(input);

        assert.deepEqual(res, [0, 0, 0, 0]);
    });

    it('边界测试用例', function () {
        const input = [0, 1, 2];
        const res = productExceptSelf(input);

        assert.deepEqual(res, [2, 0, 0]);
    });
})
