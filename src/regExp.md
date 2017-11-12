##写在前面
正则是用来处理一类格式的字符串的，如果用一个正则同时匹配好几中正则的关键字，`吃力不讨好`.  =>

`所以正则也要抽象出 内容块间的 共性`.

> 看这个
```
str.match(/([y]\1+)-([M]\1+)-([d]\1+)\s+([H]\1+):([m]\1+):([s]\1+)\s+星期(w)/
=>
str.match(/(\w)\1+/g)
```
> 还有这个

[获取 url 中的参数](https://www.nowcoder.com/practice/a3ded747e3884a3c86d09d88d1652e10?tpId=2&tqId=10852&tPage=1&rp=1&ru=%2Fta%2Ffront-end&qru=%2Fta%2Ffront-end%2Fquestion-ranking)
```
function getUrlParam(sUrl,sKey){
    var result = {};
    sUrl.replace(/\??(\w+)=(\w+)&?/g,function(a,k,v){
        if(result[k] !== void 0){
            var t = result[k];
            result[k] = [].concat(t,v);
        }else{
            result[k] = v;
        }
    });
    if(sKey === void 0){
        return result;
    }else{
        return result[sKey] || '';
    }
}
```

##[过目不忘 JS 正则表达式](http://web.jobbole.com/87019/)
###常用的一些表单校验
匹配中文：[\u4e00-\u9fa5] //中文ACALL码的范围
行首行尾空格：^\s*|\s*$ //首行出现任意个空格或者尾行出现任意个空格（任意表示也可以没有空格）

Email：^\w+@[a-z0-9]+(\.[a-z]+){1,3}$
      //起始至少为一个字符(\w字母，数字或者下划线)，然后匹配@,接着为任意个字母或者数字，\.代表真正的点，.后面为至少一个的字符（a-z）,同时这个(比如.com)整体为一个子项作为结束，可以出现1-3次。因为有的邮箱是这样的.cn.net。（xxxx.@qq.com xxxx.@163.com xxxx.@16.cn.net ）

网址：[a-zA-z]+://[^\s]*   http://......
  //匹配不分大小写的任意字母，接着是//,后面是非空格的任意字符

邮政编码：[1-9]\d{5}  //起始数字不能为0，然后是5个数字
身份证：[1-9]\d{14}|[1-9]\d{17}|[1-9]\d{16}x
###search
###match  (/g)
>注意加与不加 ／g 的区别。（只有不加／g ,才会有括号与非括号的值，否者，括号无效。）

```
> var str = 'haj123sdk54hask33dkhalsd879';
undefined
>
> var re = /1(\d+)/g;
undefined
> str.match(re)
[ '123' ]
> var re = /1(\d+)/;
undefined
> str.match(re)
[ '123', '23', index: 3, input: 'haj123sdk54hask33dkhalsd879' ]
```
> 再看看对这个数组的遍历
```
> sRGB.match(/^rgb\((0|[1-9]\d+),\s*(0|[1-9]\d+),\s*(0|[1-9]\d+)\)$/)
[ 'rgb(255, 255, 255)',
  '255',
  '255',
  '255',
  index: 0,
  input: 'rgb(255, 255, 255)' ]
> var t = sRGB.match(/^rgb\((0|[1-9]\d+),\s*(0|[1-9]\d+),\s*(0|[1-9]\d+)\)$/)
undefined
> t.forEach( (item) => console.log(item))
rgb(255, 255, 255)
255
255
255
```
### exec
exec 相比match的优势在于加/g也可以通过循环(能记录上次位置)，逐项输出(索引，小括号内容，长度) => 但是replace可以替代。
```
 var testStr = "now test001 test002";
 var re = /test(\d+)/g;
 var r = "";

//匹配两次 每次匹配都接着上一次的位置开始匹配，一直匹配到最后r就为false,就停止匹配了 匹配到test001 test002
while(r = re.exec(testStr)){
    alert(r);//返回每次匹配成功的字符串，以及子项，分别弹出 ：test001 001,test002  002
    alert(r.input); //分别弹出：   now test001 test002    now test001 test002
    alert(r[0]);   //代表每次匹配成功的字符串  分别弹出：  test001     test002
    alert(r[1]);  //代表每次匹配成功字符串中的第一个子项 (\d+)  分别弹出：001   002
    alert(r.index );   // 每次匹配成功的字符串中的第一个字符的位置，分别弹出：4  12
    alert(r.length); //分别弹出：2   2
}
```
###replace
未替换，就还是返还原值。
```
> time.toString().replace(/bbb/, '')
'Thu Jul 03 2014 00:00:00 GMT+0800 (CST)'
```
###特殊字符
> 特殊字符做普通字符用，必须加\转义。

~~str.search(/^\$\d{1,3}(,\d{3})*(.\d{2}){0,1}$/)~~
str.search(/^\$\d{1,3}(,\d{3})*(`\\.`\d{2}){0,1}$/)

###[?](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)
贪婪模式

表示前一个可有可无
```
var sUrl = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'；
sUrl.replace(/\??(\w+)=(\w+)&?/g,function(a,k,v){})
```
###x(?=y)
`它的优势在于：`可以设置条件且不影响下次匹配开始位置。(注意，?=条件不用统一带括号)即
```
/\B(?=(\d{3})+$)/g等价于/\B(?=((\d{3})+$))/g
```
匹配'x'仅仅当'x'后面跟着'y'.这种叫做正向肯定查找。

例如，/Jack(?=Sprat)/会匹配到'Jack'仅仅当它后面跟着'Sprat'。/Jack(?=Sprat|Frost)/匹配‘Jack’仅仅当它后面跟着'Sprat'或者是‘Frost’。`但是‘Sprat’和‘Frost’都不是匹配结果的一部分。` (对于/g来说不占位置 => 用到的还能被下次匹配 =>  类似条件，不占位置，replace回调函数会传入)

###x(?!y)

匹配'x'仅仅当'x'后面不跟着'y',这个叫做正向否定查找。

例如，/\d+(?!\.)/匹配一个数字仅仅当这个数字后面没有跟小数点的时候。正则表达式/\d+(?!\.)/.exec("3.141")匹配‘141’但是不是‘3.141’

```
var num = '1234567891';

var res = num.replace(/\B(?=(\d{3})+(?!\d))/g, function(all, itemA, itemB) {
    console.log(all, itemA, itemB);
    return ',';
});
console.log(res);
var res = num.replace(/\B(?=((\d{3})+(?!\d)))/g, function(all, itemA, itemB) {
    console.log(all, itemA, itemB);
    return ',';
});
console.log(res);
```
###^
```
> var a = '1234abcd';
undefined
> a.match(/[^\da-z]{1}/g)
null
> a.match(/[^12]{1}/g)
[ '3', '4', 'a', 'b', 'c', 'd' ]
```
###[\\B](https://segmentfault.com/q/1010000008877346)
`\B 不是 否\b`(与\W,\w,\D,\d,\S,\s间关系不同，他只匹配位置)

`他匹配一个前后字符都是相同类型的位置`：都是单词或者都不是单词。

一个字符串的开始和结尾都被认为是非单词。
```
//都是单词
> var str3 = '1--23'
undefined
> str3.replace(/\B/g, ',')
'1-,-2,3'
//都不是单词
> var str2 = '1-23'
undefined
> str2.replace(/\B/g, ',')
'1-2,3'
//开始和结尾也算都不是单词
> str = ''
''
> str.replace(/\B/g, ',')
','
```

> 应用：

\B既要复合自身要求(都是单词或者都不是单词)，也要复合(?=)即正向肯定查找的需求)
```
var num = 123456789;
num.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
```
所以上述代码可以简化为
```
var res = num.replace(/\B(?=(\d{3})+$)/g, function(all, itemA, itemB) {
    console.log(all, itemA, itemB);
    return ',';
});
```
```
a.split('').reverse().reduce(function(prev, item, index) {
 if (index && index % 3 === 0) {
  prev.push(',');
 }
 prev.push(item);
  return prev;
 }, []).reverse().join('');
```
###\\b
\b : 独立的部分 （ 起始，结束，空格 ）
```
> var str = "one two"
> str.match(/\w+\b/g)
[ 'one', 'two' ]
```
###\\a
\a 表示重复的某个子项(`这个子项必须带括号`) 比如：

\1 重复的第一个子项

\2 重复的第二个子项
```
/ (a) (b) (c) \1/-----匹配 abca
/ (a) (b) (c) \2/------匹配 abcb
```
```
function containsRepeatingLetter(str) {
     return /([a-zA-Z])\1/.test(str);
 }
```
> 前面的必须加括号！

`注意与/(\w){1,}/g不同`;(~~/^\w+@[a-z0-9]+(\.[a-z]){1, 3}$/~~ {1,3} 内部不允许有空格.)

`(\w)\1+`\1前的内容必须带括号；(带[]也不行，必须())

```
> str
'aadddjjkklsssssssssssssssss'
> str.match(/(\w){1,}/g)
[ 'aadddjjkklsssssssssssssssss' ]
> str.match(/(\w)\1+/g)
[ 'aa', 'ddd', 'jj', 'kk', 'sssssssssssssssss' ]
> str.match(/[s]\1+/g)
null
> str.match(/([s])\1+/g)
[ 'sssssssssssssssss' ]
```
###\\w
\w : 字符 ( 字母 ，数字，下划线_ )

> \w !== [a-zA-Z]

###\\i
```
function endsWithVowel(str) {
    return str.search(/[a|e|i|o|u]$/i) === -1 ? false : true;
}
```

###例子1
```
> var num = 123.456
undefined
> num.search(/\.[0]*?([1-9]\d*)/, function($0, $1) { console.log( $0 + ' '+ $1);});
TypeError: num.search is not a function
```

```
> num = '123.0001234'
'123.0001234'
> num.search(/\.[0]*?([1-9]\d*)/, function($0, $1) { console.log( $0 + ' '+ $1);});
3
> num.search(/\.[0]*?([1-9]\d*)/, function($0, $1) { console.log( '$0:'+$0 + '$1: '+ $1);});
3
> num.match(/\.[0]*?([1-9]\d*)/, function($0, $1) { console.log( '$0:'+$0 + '$1: '+ $1);});
[ '.0001234', '1234', index: 3, input: '123.0001234' ]
> num.replace(/\.[0]*?([1-9]\d*)/, function($0, $1) { console.log( '$0:'+$0 + '$1: '+ $1);});
$0:.0001234$1: 1234
'123undefined'
```
```
> num.replace(/\.0*?([1-9]\d*)/, function($0, $1) { console.log( '$0:'+$0 + '$1: '+ $1);});
$0:.0001234$1: 1234
'123undefined'
```
###例子2
```
var str = 'assssjdssskssalsssdkjsssdss';

var arr = str.split(''); //把字符串转换为数组
str = arr.sort().join(''); //首先进行排序，这样结果会把相同的字符放在一起，然后再转换为字符串
//alert(str);  // aaddjjkklsssssssssssssssss

 var value = '';
 var index = 0;
var re = /(\w)\1+/g;  //匹配字符，且重复这个字符，重复次数至少一次。
str.replace(re,function($0,$1){
   //alert($0);   代表每次匹配成功的结果 : aa dd jj kk l sssssssssssssssss
     //alert($1);  代表每次匹配成功的第一个子项，也就是\w:  a d j k l S
　　
    if(index<$0.length){  //如果index保存的值小于$0的长度就进行下面的操作
          index = $0.length;  // 这样index一直保存的就在最大的长度
           value = $1;  //value保存的是出现最多的这个字符
    }

})import java.util.Scanner;

public class First {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String string = scanner.nextLine();
        longestNum(string);
    }

    public static void longestNum(String string) {
        int result = 0;
        int count = 0;
        int end = 0;
        boolean isNum = false;

        for(int i = 0; i < string.length(); i++) {
            char c = string.charAt(i);
            if (c > '9' || c < '0') {
                count  = 0;
                isNum = false;
                continue;
            }
            if (isNum) {
                count ++;
            } else  {
                count = 1;
                isNum = true;
            }
            if (count >= result) {
                result = count;
                end = i;
            }
        }

        if (result == 0) {
            System.out.println(0);
            return ;
        }
        System.out.println(string.substring(end - result + 1, end + 1));;
        System.out.println(result);
    }
};

alert('最多的字符:'+value+',重复的次数:'+index);  // s   17
```
##[JS中给正则表达式加变量](http://www.cnblogs.com/zzsdream/articles/5499110.html)
相应的，我们也可以用构造函数来生成正则表达式
var re = new RegExp("^\\d+$","gim"); //注意，反斜杠需要转义
那么，给它加变量，就和我们前面写的给字符串加变量一样了。
var v = "bl";
var re =new RegExp("^\\d+" + v + "$","gim"); // re为/^\d+bl$/gim
至此，最初的问题问题也完全解决了。

##总结
>`对字符串内容的操作`(字符串模板无用，只要内容)，`肯定是该`提取其中内容，用`数组处理`(而不是字符串接口).

search `验证数据用` => includes

match从字符串`取数据用`(简单的用split). => forEach

replace`更改字符串用`.(原字符串的模板还用的上) => map/filter
```
> var b = 'abcd'
undefined
> b.replace(/\w/, (all) => all.toUpperCase())
'Abcd'
```

没有 => reduce`制造新类型数据`


