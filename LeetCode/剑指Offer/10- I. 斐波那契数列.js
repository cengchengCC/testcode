/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n === 0 || n === 1)return n;
    var p = 0, q = 1, r = 1;
    for(let i = 2; i < n; i++){
        p = q,
        q = r,
        r = (p + q)% 1000000007;
    } 
    return r 
};