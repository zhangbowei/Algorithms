import assert from 'assert';
import {multiplay, divide, difference} from '../src/divide&multi&diff';

describe('乘除法', function () {

    it('multi测试用例', function () {
        let res = multiplay(3, 0.001);
        assert.equal(res, 0.003);
    });

    it('div测试用例', function () {
        let res = divide(0.3, 0.1);
        assert.equal(res, 3);
    });

    it('diff测试用例', function () {
        let res = difference(0.3, 0.2);
        assert.equal(res, 0.1);
    });

    it('diff测试用例', function () {
        let res = difference(3, 0.2);
        assert.equal(res, 2.8);
    });
})
