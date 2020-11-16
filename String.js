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
//
var string="aabcccccaaa"
/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    if(S.length===0)return S;
    let result='';
    let temp='',count=1
    for (let i of S){
        console.log(temp)
        if(temp===''){
            temp=i
        }else{
            if(temp===i){
                count++
            }else{
                result+=temp+count
                
                temp=i
                count=1
            }
        }
    }
    if(S.length<result.length){
        return S
    }
    return result
};
console.log(compressString(string))