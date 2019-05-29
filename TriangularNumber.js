//input: number
//output: number of stars in triangle
//recursion input: number + n
//recursion output: number

function triNum(num) {
    if(num === 0) {
        return 0;
    }
    return num + triNum(num - 1);
};

console.log(triNum(1, 3));