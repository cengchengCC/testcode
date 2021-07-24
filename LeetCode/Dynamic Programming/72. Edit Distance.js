// 72. 编辑距离

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let n1 = word1.length,
        n2 = word2.length;
    let dp = new Array(n1 + 1).fill(0).map(d => new Array(n2 + 1).fill(0));

    for(let j = 1; j <= n2; j ++){
        dp[0][j] = dp[0][j - 1] + 1;
    }

    for(let i = 1; i <= n1; i ++){
        dp[i][0] = dp[i -1][0] + 1;
    }

    for(let i = 1; i <= n1; i++){
        for(let j = 1; j <= n2; j++){
            if(word1[i -1] == word2[j -1]){
                dp[i][j] = dp[i -1][j -1]
            }else{
                dp[i][j] = Math.min(dp[i -1][j - 1], dp[i][j -1], dp[i -1][j])+ 1;
            }
        }
    }
    return dp[n1][n2]
};

// https://leetcode-cn.com/problems/edit-distance/solution/dong-tai-gui-hua-xiang-jie-xiang-jin-zhu-a8e5/

// O(mn)
// O(mn)

var minDistance = function(word1, word2) {
    let n1 = word1.length,
        n2 = word2.length;
    let dp = new Array(n1 + 1).fill(0);

    for(let j = 0; j <= n2; j ++){
        dp[j] = j;
    }

    for(let i = 1; i <= n1; i++){
        let temp = dp[0];
        dp[0] = i;
        for(let j = 1; j <= n2; j++){
            let pre = temp;
            temp = dp[j]
            if(word1[i -1] == word2[j -1]){
                dp[j] = pre;
            }else{
                dp[j] = Math.min(Math.min(dp[j - 1], pre), dp[j])+ 1;
            }
        }
    }
    return dp[n2]
};

console.log(minDistance("horse","ros"))

// https://zhuanlan.zhihu.com/p/91582909