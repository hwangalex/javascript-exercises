const repeatString = function(string, numOfRepeats) {
    let output = '';

    if (numOfRepeats < 0 ) {
        return 'ERROR';
    } else if (numOfRepeats == 0) {
        return output;
    }
    for (let i = 0; i < numOfRepeats; i++) {
         output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
