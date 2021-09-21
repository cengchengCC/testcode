var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    for(let i = 1; i <= m; i++){
        const c1 = text1[i - 1];
        for(let j = 1; j <= n; j++){
            const c2 = text2[j - 1];
            if(c1 === c2){
                dp[i][j] = dp[i - 1][j - 1] + 1
            }else{
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[m][n]
};
//时间复杂度：O(mn)
//空间复杂度：O(mn)
//正态规划
//https://leetcode-cn.com/problems/longest-common-subsequence/solution/zui-chang-gong-gong-zi-xu-lie-by-leetcod-y7u0/


var longestCommonSubsequence = function(text1, text2) {
    var m = text1.length, n = text2.length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(''));
    for(let i = 1; i <= m; i++){
        const c1 = text1[i - 1];
        for(let j = 1; j <= n; j++){
            const c2 = text2[j - 1];
            if(c1 === c2){
                dp[i][j] = dp[i - 1][j - 1] + c2;
            }else{
                dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i -1][j];
            }
        }
    }
    //console.log(dp);
    return dp[m][n];
};