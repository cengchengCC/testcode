/**
 * 14. 最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs.length === 0)return '';
    let ans = strs[0];
    for(let i = 1; i < strs.length; i++){
        let j = 0;
        for(; j < ans.length && j < strs[i].length; j++){
            if(ans[j] !== strs[i][j])break;
        }
        ans = ans.substr(0, j);
        if(ans === '')return ans;
    }
    return ans;
};
// https://leetcode-cn.com/problems/longest-common-prefix/solution/hua-jie-suan-fa-14-zui-chang-gong-gong-qian-zhui-b/
console.log(longestCommonPrefix(["flower","flow","flight"]))