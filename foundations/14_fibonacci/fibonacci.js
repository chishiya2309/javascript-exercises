let array = [];
array[0] = 0;
array[1] = 1;
for (let i = 2; i <= 50; i++) {
    array[i] = array[i - 1] + array[i - 2];
}

const fibonacci = function(seq) {
    let res = Number(seq);
    if (res < 0) {
        return "OOPS";
    }
    return array[res];
};

// Do not edit below this line
module.exports = fibonacci;
