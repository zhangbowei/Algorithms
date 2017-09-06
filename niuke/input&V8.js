//多组，每组固定行 n
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