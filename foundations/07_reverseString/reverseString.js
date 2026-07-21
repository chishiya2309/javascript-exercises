const reverseString = function(word) {
    let result = "";
    let i = word.length - 1;
    while (i >= 0) {
        result += word[i];
        i--;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
