/**
 * 20. 表示数值的字符串
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function(s) {
    let cursor  = 0;
    let isValid;

    const scanSignedInterger = (s) => {
        if(s[cursor] === '+' || s[cursor] === '-'){
            cursor++;
        }
        return scanUnsignedInterger(s);
    }

    const scanUnsignedInterger = (s) =>{
        const temp = cursor;
        while(s[cursor] >= '0' && s[cursor] <= '9'){
            cursor ++;
        }
        return s[temp] >= '0' && s[temp] <= '9';
    }

    while(s[cursor] === ' '){
        cursor++;
    }

    isValid = scanSignedInterger(s);

    if(s[cursor] === '.'){
        cursor ++;
        if(scanUnsignedInterger(s)){
            isValid = true;
        }
    }

    if(s[cursor] === 'e' || s[cursor] === 'E'){
        cursor++;
        if(isValid){
            isValid = scanSignedInterger(s)
        }
    }

    while(s[cursor] === ' '){
        cursor++;
    }

    if(s[cursor]!== undefined)return false;

    return isValid
};