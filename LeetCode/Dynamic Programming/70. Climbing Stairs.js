/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if(n <= 2)return n;
    let p = 0, q = 1, r = 1;
    for(let i = 2; i <= n; i++){
        p = q;
        q = r;
        r = p + q;
    }
    return r
};

var climbStairs = function(n) {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};