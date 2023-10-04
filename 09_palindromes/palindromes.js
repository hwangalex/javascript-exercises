const palindromes = function (string) {
    let convertableString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let splitString = convertableString.split("");
    if (splitString.reverse().join("") == convertableString) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
