// 1119. 删去字符串中的元音

var removeVowels = function(S) {
    let res=''
    let vowels=['a','e','i','o','u']
    for (let i of S){
        if(vowels.indexOf(i)===-1)
        res+=i
    }
    return res
};
var removeVowels = function(S) {
    return S.replace(/[aeiou]/g, '')
};