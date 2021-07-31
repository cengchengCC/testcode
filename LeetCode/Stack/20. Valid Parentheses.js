// 20. 有效的括号
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    // if(s.length%2 !== 0)return false;
    const ans = [],
        obj = {']': '[', ')': '(', '}': '{'};
    for(let item of s){
        if(!obj[item]){
            ans.push(item);
            continue;
        }else{
            if(obj[item] !== ans[ans.length - 1]){
                return false
            };
            ans.pop();
        }
    }
    return !ans.length;
};

// 22. Generate Parentheses
// 22. 括号生成
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const ans = [];
    const dfs = (str, a, b)=>{
        if(a == n && str.length == 2 * n){
            ans.push(str);
            return
        };
        if(a < n){
            dfs(str + '(', a + 1, b + 1)
        }
        if(b > 0){
            dfs(str + ')', a, b - 1);
        }
    }
    dfs('', 0, 0);
    return ans
};

// 17. Letter Combinations of a Phone Number
// 17. 电话号码的字母组合
/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if(digits.length == 0)return [];
    const ans = [],
        phoneMap = new Map([
            ['2', 'abc'],
            ['3', 'def'],
            ['4', 'ghi'],
            ['5', 'jkl'],
            ['6', 'mno'],
            ['7', 'pqrs'],
            ['8', 'tuv'],
            ['9', 'wxyz']
        ]);

    const backtrack = (arr, k) =>{
        if(arr.length == digits.length){
            ans.push(arr.join(''));
            return
        }
        const letters  = phoneMap.get(digits[k]);
        for(let ch of letters){
            arr.push(ch)
            backtrack(arr, k + 1)
            arr.pop()
        }
    }
    backtrack([], 0)
    return ans;
};

/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if(digits.length == 0)return [];
    const phoneMap = new Map([
            ['2', 'abc'],
            ['3', 'def'],
            ['4', 'ghi'],
            ['5', 'jkl'],
            ['6', 'mno'],
            ['7', 'pqrs'],
            ['8', 'tuv'],
            ['9', 'wxyz']
        ]);
    let result = [], index = 1, temp, map; 
    result.push(...phoneMap.get(digits[0]).split(''));
    while(index < digits.length){
        map = phoneMap.get(digits[index]);
        temp = [];
        for(let ch of map){
            for(let i = 0; i < result.length; i ++){
                temp.push(result[i] + ch)
            }
        }
        result = temp;
        index++
    }
    return result;
};