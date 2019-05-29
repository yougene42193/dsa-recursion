//input: a number
//output: factorial of num
//recursion input: num - 1
//recursion output: multiple all the num before

function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num -1);
};

console.log(factorial(5));