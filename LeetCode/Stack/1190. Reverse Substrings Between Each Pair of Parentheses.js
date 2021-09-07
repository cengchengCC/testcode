// 1190. 反转每对括号间的子串
/**
 * 栈 
 * O(n2)
 * O(n)
 * @param {string} s
 * @return {string}
 */
 var reverseParentheses = function(s) {
    const stk = [];
    let str = '';
    for(const ch of s){
        if(ch === '('){
            stk.push(str);
            str = '';
        }else if(ch === ')'){
            str = str.split('').reverse().join("");
            str = stk.pop() + str;
        }else{
            str += ch;
        }
    }
    return str;
};

// https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses/solution/fan-zhuan-mei-dui-gua-hao-jian-de-zi-chu-gwpv/
/**
 * 预处理括号,遍历拿到所有的括号的index,然后逆序地遍历
 * O(n)
 * O(n)
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const n = s.length;
    const pair = new Array(n).fill(0);
    const stack = [];
    for(let i = 0; i < n; i ++){
        if(s[i] === '('){
            stack.push(i);
        }else if( s[i] === ')'){
            const j = stack.pop();
            pair[i] = j;
            pair[j] = i;
        }
    }

    const sb = [];
    let index = 0, step = 1;
    while(index < n){
        if(s[index] === '(' || s[index] === ')'){
            index = pair[index];
            step = - step;
        }else{
            sb.push(s[index]);
        }
        index += step;
    }
    return sb.join('')
};

var c = reverseParentheses("(u(love)i)");
console.log(c)