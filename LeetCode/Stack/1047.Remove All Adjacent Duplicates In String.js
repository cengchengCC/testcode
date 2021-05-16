var removeDuplicates = function(S) {
    const stk = [];
    for(let letter of S){
        if(stk.length && stk[stk.length-1] === letter){
            stk.pop()
        }else{
            stk.push(letter)
        }
    }
    return stk.join("")
};
//https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/solution/shan-chu-zi-fu-chuan-zhong-de-suo-you-xi-4ohr/