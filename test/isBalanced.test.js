import assert from 'assert';
import isBalanced from '../src/isBalanced';

describe('大括号是否闭合', function () {

    it('基本测试用例', function () {
        let input = '{{}}{}{}';
        let res = isBalanced(input);
        assert.strictEqual(res, true);
    });

    it('基本测试用例', function () {
        let input = '{}{{}';
        let res = isBalanced(input);
        assert.strictEqual(res, false);
    });

    it('边界测试用例', function () {
        let input = "";
        let res = isBalanced(input);
        assert.strictEqual(res, true);
    });

})
