var babel = require('babel-core');
var t = require('babel-types');

// const code = `a.b.log(-8);`;
const code = `log(-8);`;

const visitor = {
	CallExpression(path) {
		if (path.node.callee.name !== 'log') return;

		path.replaceWith(t.CallExpression(
			t.MemberExpression(t.identifier('console'), t.identifier('log')),
			path.node.arguments
		));
	}
};

const result = babel.transform(code, {
	plugins: [{
		visitor: visitor
	}]
});

// console.log(-8)
console.log(result.code);
