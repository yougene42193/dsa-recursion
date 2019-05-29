//input: array
//output: double of the array
//recursion input: array minus first element
//recursion output: push to new array, array.slice(1)

function arrayDouble(arr) {
    if (arr.length === 0) {
        return [];
    }
    const doubleNum = arr[0]*2;
    return [doubleNum, ...arrayDouble(arr.slice(1))];
};

console.log(arrayDouble([1, 2, 3]));