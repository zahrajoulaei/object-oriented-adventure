var isPalindrome = function(s) {
    let arr = []
    arr.push(s)
    console.log(s)
    let myArray = s.split(" ");

    return myArray
};


console.log( isPalindrome("ss so ssspsp aaa"))




var isPalindrome = function(s) {
    let alpha ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let trimmed=""
    for(let i=0; i<s.length; i++){
        if(alpha.includes(s[i])){
            trimmed+=s[i]
        }
    }
    let reversed=trimmed.split("").reverse().join("");
    return trimmed.toLowerCase()===reversed.toLowerCase()
};