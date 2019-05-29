//input: string
//output: all combinations the string can make
//recursion input: length of string -1 
//recursion output: array of combinations

function anagrams(prefix, str) {
    if (str.length <= 1) {
        console.log(prefix + str);
    }
    else {
        for (let i = 0; i < str.length; i++) {
            const current = str.substring(i, i + 1);
            const before = str.substring(0, i);
            const after = str.substring(i + 1);
            anagrams(prefix + current, before + after);
        }
    }
};

anagrams('', 'east')