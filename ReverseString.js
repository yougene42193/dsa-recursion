//input: a string
//output: string reversed
//recursion input: string minus first character
//recursion output: character plus the remaining string

function reversedString(str) {
    if (str.length === 0) {
        return '';
    }

    return  str[str.length - 1] + reversedString(str.slice(0, -1));
};

console.log(reversedString('string'));