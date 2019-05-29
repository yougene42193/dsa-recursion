//input: number of sheep
//output: `${num} - Another sheep jumps over the fence`
//recursion input: current sheep num
//recursion output: function with decrement input

function countSheep(num) {
    if (num === 0) {
        return `No sheep left`;
    }
    console.log(`${num} - Another sheep jumps over the fence`);
    return (countSheep(num - 1));
}

console.log(countSheep(3));