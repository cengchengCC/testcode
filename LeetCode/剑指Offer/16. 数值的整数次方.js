/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    /*快速幂+递归
        O(logn)
        O(logn)
    */
    if(n === 0)return 1;
    if(n < 0){
        return 1/myPow(x, -n);
    }
    if(n % 2){
        return x * myPow(x, n -1)
    }
    return myPow(x * x, n/2)
};

var myPow = function(x, n) {
    /*快速幂+迭代
        O(logn)
        O(1)
    */
    if(n === 0)return 1;
    if(n < 0){
        return 1/myPow(x, -n);
    }
    let res = 1;
    const ans = n.toString(2).split('').map(d => +d);
    let temp = x;
    for(let i = ans.length - 1; i >= 0; i --){
        if(i !== ans.length - 1)temp *=temp;
        res *= ans[i] == 0 ? 1 : temp;
    }
    return res;
};