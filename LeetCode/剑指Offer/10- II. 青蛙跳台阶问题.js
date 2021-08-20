/**
 * @param {number} n
 * @return {number}
 */
 var numWays = function(n) {
    if(n === 0 || n === 1)return 1;
    var p = 1, q = 1, r = 2;
    for(let i = 2; i < n;i ++){
        p = q,
        q = r, 
        r = (p + q) % 1000000007
    }
    return r
};