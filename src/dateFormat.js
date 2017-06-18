Date.prototype.format = function (str) {
    var monthName = [
        'January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'Aguest', 'September',
        'October', 'November', 'December'
    ],
        year = this.getFullYear(),
        month = this.getMonth(),
        day = this.getDate();

    return str.replace(/y+/, year)
        .replace(/m+(\S)/, (all, part) => [month+1, part].join(''))
        .replace(/m+(\s)/, (all, part) => [monthName[month], part].join(''))
        .replace(/d+/, day);
}

var time = new Date(2014, 6, 3);

time.format('y年m月d日'); // "2014年7月3日"
time.format('y-m-d');    // "2014-7-3 "
time.format('m y');      // "July 2014"