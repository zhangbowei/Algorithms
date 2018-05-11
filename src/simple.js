var a = `{
    'success': true,
    'code': '00',
    'm3g': '请求成功',
    'data': [{
        'user_no': '100033',
        'username': 'hhoo',
        'headpic_url': 'http://005.oo.cn/201853351322521.jpg',
        'new_mag': '你好'
    }]
}`
a = a.replace(/'/g, '"');
var c = JSON.parse(a);

console.log(c.data[0].username);