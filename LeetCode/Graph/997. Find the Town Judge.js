/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const dp = new Array(n + 1).fill(0).map(d => new Array(n + 1).fill(0));

    for(let [s, t] of trust){
        dp[s][t] = 1
    }

    const ans = []
    for(let i = 1; i < n + 1; i++){
        if(dp[i].every(d => d == 0)){
            if((dp.map(d => d[i])).every((d, m) => d !== 0 || m ==0 || m == i)){
                ans.push(i)
            }
        }
    }
    return ans.length == 1 ? ans[0] : -1
};

var findJudge = function(n, trust) {
    const cache = new Array(n + 1).fill(0);

    for(let [s, t] of trust){
        cache[s] --;
        cache[t] ++;
    }

    for(let i = 1; i < cache.length; i++){
        if(cache[i] == n -1)return i;
    }
    return -1
};
//出入度为N - 1


console.log(findJudge(2,[[1,2]]))