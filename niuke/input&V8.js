//多组，每组指定行 n
var input = [], line;
var count = 0;
var lineNum;

for (var i = 0; ; ++i) {

    ++count;
    line = read_line();
    if (!line) {
        break;
    }
    //每组一行，lineNum = 0；
    lineNum = +line;
    input.push(line);

    for (var j = 0; j < lineNum; ++j) {
        input.push(read_line());
    }

    doIt(input);

    initAll();
}

function initAll() {
    input = [];
}

function doIt() {

}
//多组，每组固定行 n
var input = [], line;
var lineNum = 1;
var data;

for (var i = 0; ; ++i) {

    for (var j = 0; j < lineNum; ++j) {
        input.push(data = read_line());
    }
    if (data === '') {
        //read_line没有时返回'', 而不是undefined
        break;
    }

    doIt(input);

    initAll();
}

function initAll() {
    input = [];
}

function doIt(input) {
    print(input);
}
//一组，每组固定行 n
var input = [], line;
var lineNum = 1;


for (var j = 0; j < lineNum; ++j) {
    input.push(read_line());
}

doIt(input);

//一组，大数据，可能多行
var line;
var lines = '';
while (line = read_line()) {
    lines += line;
}