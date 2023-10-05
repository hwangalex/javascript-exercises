const fibonacci = function(number) {
    let num = Number(number);
    let holder1 = 1;
    let holder2 = 0;

    if (num < 0) {
        return "OOPS";
    } else {
        for (i = 2; i <= num; i++) {
            let current = holder1 + holder2;
            holder2 = holder1;
            holder1 = current;
        }

        return holder1;
    }
};

// Do not edit below this line
module.exports = fibonacci;
