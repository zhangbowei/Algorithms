function convertToBinary(num) {
    var bit = [];
    while (true) {
        bit.push(num & 1);
        num = num >> 1;
        if (!num) {
           break;
        }
    }

    while (bit.length < 8) {
           bit.push(0);
    }

    return bit.reverse().join('');
}