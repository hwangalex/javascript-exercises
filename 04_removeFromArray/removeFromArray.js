const removeFromArray = function (array, ...moreArgs) {
    let output = array.filter(element => !moreArgs.includes(element));
    return output;

};

// Do not edit below this line
module.exports = removeFromArray;
