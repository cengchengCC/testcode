/**
 * @param {number[]} jump
 * @return {number}
 */
var minJump = function(jump) {
    const pos = [0],
        visited = {0 : true},
        steps = 0,
        len = jump.length,
        arr = jump.filter((d, i) => d + i >= len);
    while(pos.length !== 0){
        let temp = []
        const push = (index) => {
            if (!visited[index] && index >= 0) {
                visited[index] = true
                temp.push(index)
            }
        }
        for(const index of pos){
            if(index >= len)return steps;
            push(index + jump[index])
            for(let i = index - 1;i >= 0; i --){
                push(i)
            }
        }
        steps ++;
        pos = temp
    }
    return steps
};

//O(n)
//O(n)

var minJump = function(jump) {
    let n = jump.length,
        dp = new Array(n);
    dp[n -1] = 1;
    for(let i = n - 2;i >= 0; i--){
        dp[i] = jump[i] + i >= n ? 1 : dp[i + jump[i]] + 1;
        for(let j = i + 1; j < i + jump[i] && dp[i] < dp[j]; j++){
            // ->j  or  ->i  ->i + jump[i] -> j 
            dp[j] = Math.min(dp[j], dp[i] + 1)
        }
    }
    return dp[0]
};
