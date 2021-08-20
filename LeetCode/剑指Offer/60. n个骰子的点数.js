/**
 * @param {number} n
 * @return {number[]}
 */
 var dicesProbability = function(n) {
    var num = 6 * n;
    var dp = [];
    for(let i = 0; i <= n; i ++){
        dp.push(new Array(num + 1).fill(0))
    }
    for(let i = 1; i <= 6; i++){
        dp[1][i] = 1;
    }

    for(let i = 2; i <= n; i++){
        for(let j = i; j <= 6 * i; j ++){
            for(let k = 1; k <= 6; k ++){
                if(k - j >= 0){
                    break;
                }
                dp[i][j] += dp[i - 1][j - k]
            }
        }
    }

    var all = Math.pow(6, n);

    return dp[n].slice(n, 6 * n + 1).map(d => d/all);
};

var dicesProbability = function(n){
    let dp = new Array(6).fill(1/6);
    for(let i = 2; i <= n; i ++){
        let temp = new Array(5 * i  + 1).fill(0);
        for(let j = 0; j < dp.length; j++){
            for(let k = 0; k < 6; k ++){
                temp[j + k] += dp[j] * 1/6;
            }
        }
        dp = temp;
    }
    return dp;
}