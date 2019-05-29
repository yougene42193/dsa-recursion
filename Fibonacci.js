//input: number
//output: array of num
//recursion input: num - 1 and num - 2
//output: add the 2 previous nums

function fibonacci(num) {
    if (num === 1) {
        return [0];
    }
    if (num === 2) {
        return [1, 1];
    }
    const arr = fibonacci(num - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
};

console.log(fibonacci(7));