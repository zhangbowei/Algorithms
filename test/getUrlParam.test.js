import assert from 'assert';
import getUrlParam from '../src/getUrlParam';

describe('获取 url 中的参数', function () {

    it('基本测试用例', function () {
        const inputA = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe';
        const inputB = 'key';
        const res = getUrlParam(inputA, inputB);

        assert.deepEqual(res, ['1', '2', '3']);
    });

    it('边界测试用例', function () {
        const inputA = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe';
        const res = getUrlParam(inputA);

        assert.deepEqual(res, { key: [ '1', '2', '3' ], test: [ '4' ] });
    });
})
