//input: a number
//output: a binary number
//recursion input: num/2
//recursion output: num either 1 or 0

function binary(num) {
    if (num === 0) {
        return '0';
    }
    const dividedNum = Math.floor(num/2);
    const remainder = num % 2;
    if (dividedNum === 0) {
        return `${remainder}`;
    }
    return binary(dividedNum) + remainder.toString();
};

console.log(binary(25));