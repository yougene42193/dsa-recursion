//input: string and a splitter
//output: array of strings
//recursion input: rest of string
//recursion output: split each string

function stringSplit(str, splitter) {
    if (!splitter) {
        return [...str];
    }
    if(str.indexOf(splitter) === -1) {
        return [str];
    }
    return [str.slice(0, str.indexOf(splitter)), ...stringSplit(str.slice(str.indexOf(splitter) + 1), splitter)];
};

console.log(stringSplit('this is a string', ' '))