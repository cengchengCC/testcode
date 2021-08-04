// 394. 字符串解码
/**
 * @param {string} s
 * @return {string}
 * 
 */
 var decodeString = function (s) {
    let [stack, num, str] = [[], '', ''];
    for(let i = 0; i < s.length;i ++){
        if(!isNaN(s[i])){
            num += s[i];
            if(isNaN(s[i + 1])){
                stack.push(Number(num));
                num = '';
            }
        }else if(s[i] == ']'){
            str = '';
            while(stack[stack.length - 1] !== '['){
                str = stack.pop() + str;
            }
            stack.pop();
            stack.push(str.repeat(stack.pop()))
        }else{
            stack.push(s[i]);
        }
    }
    return stack.join('')
  };

var decodeString = function (s) {
    let stackNum = []
    let stackString = []
    let map = new Map()
    
    let num = 0
    let ans=''
    
    for (let i of s) {
      if (!isNaN(parseInt(i))) {
        //数字
        num = num * 10 + parseInt(i);
      }
      else if (i.charCodeAt() >= 97 && i.charCodeAt() <= 122) {
        //字母
        ans = ans + i
      }
      // 遇到[字符，将收集到的数字压入栈，同时将数字置为0
      // (题目说了K为正整数，即一定存在 不可以为[abc]这样的形式)
      // 将之前收集到字符串压入字符栈
      else if(i === '['){
        stackNum.push(num);
        num = 0;
        stackString.push(ans);
        ans = "";
      }
      
      else if (i === ']') {
        
        let number = stackNum[stackNum.length-1];
        
        stackNum.pop();
  
        let tem = ans;
        for(let j = 0; j < number - 1; j++){
            ans += tem;
        }
        let newStr = stackString[stackString.length-1];
        stackString.pop();
        ans = newStr + ans;
      }
    }
    return ans
  };