/**
 * @param {number} n
 * @return {number}
 */
 var countDigitOne = function(n) {
    const len = n.toString().split('').length;
    let res = 0;
    for(let i = 1; i <= len; i++){
        let digit = 10 ** (i - 1),
            low = n % digit,
            high = Math.floor(n / digit / 10),
            cur =  Math.floor(n / digit) % 10;
        if(cur == 0){
            res += high * digit;
        }else if(cur == 1){
            res += high * digit + low + 1;
        }else{
            res += (high + 1) * digit;
        }
    }
    return res
};