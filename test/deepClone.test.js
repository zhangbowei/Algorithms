import assert from 'assert';
import deepClone from '../src/deepClone';

describe('深拷贝', function () {

    it('基本测试用例', function () {
        const input = [1, 2, [{test: true}, 2, [1, 2, 3]]];
        const res = deepClone(input);

        assert.deepEqual(res, input);
    });

    it('基本测试用例', function () {
        const input = {a: 1, b: [1, 2, {test: true}]};
        const res = deepClone(input);

        assert.deepEqual(res, input);
    });

    it('边界测试用例', function () {
        const input = [];
        const res = deepClone(input);

        assert.deepEqual(res, input);
    });

    it('边界测试用例', function () {
        const input = {};
        const res = deepClone(input);

        assert.deepEqual(res, input);
    });
})
