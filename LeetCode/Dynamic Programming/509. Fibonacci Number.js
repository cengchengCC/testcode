/**
 * 509. 斐波那契数
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n < 2)return n;
    let p = 0, q = 0, r = 1;
    for(let i = 2; i <= n; i ++){
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};
// 时间复杂度：O(n)
// 空间复杂度：O(1)

