//test input
var input = `5 7
1 2 3 4 5
Q 1 5
U 3 6
Q 3 4
Q 4 5
U 4 5
U 2 9
Q 1 5`;
input = input.split('\n');

//r1.close: format Data
function formatData(rawData) {
    return rawData.map(function (element, order) {
        return element.map(function (item, index) {
            //Depending on the Title
            // return (order > 1 && index === 0) ? item : +item;
            return +item;
        });
    });
}
var data = input.map(function (item) {
    return item.split(' ');
});
data = formatData(data);

//split dataArr
/*var N = data[0][0], M = data[0][1];
var scoreArr = data[1];
var actionArr = data.slice(2);*/





