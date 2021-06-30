/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
// var numWays = function(n, relation, k) {
//     let dp = new Array(k + 1).fill(0).map(() => new Array(n + 1).fill(0))

//     dp[0][0] = 1;
//     for(let i = 1;i <= k; i ++){
//         // https://leetcode-cn.com/problems/chuan-di-xin-xi/
//     }
// };

var numWays = function(n, relation, k) {
    let dp = new Array(k + 1).fill(0).map(() => new Array(n + 1).fill(0))
    dp[0][0] = 1;
    for(let i = 1;i <= k; i ++){
        for(let r of relation){
            dp[i][r[1]] += dp[i - 1][r[0]]
        }
    }
    return dp[k][n -1]
}
//DP


var numWays = function(n, relation, k) {
    let count = 0;
    var _numsWays = function(start, step){
        if(step == k){
            if(start == n - 1)count ++;
            return
        }
        relation.filter(d => d[0] == start).map(d => _numsWays(d[1], step + 1))
    }
    _numsWays(0, 0)
    return count
}
//DFS

//BFS
//https://leetcode-cn.com/problems/chuan-di-xin-xi/solution/js-bfs-by-ignore_express/

console.log(numWays(5, [[0, 2], [2, 1], [3, 4], [2, 3], [1, 4], [2, 0], [0, 4]], 3))
console.log(numWays(3, [[0, 2], [2, 1]], 2))