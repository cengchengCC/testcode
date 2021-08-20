/**
 * 
 * @param {string} s 
 * @return {string}
 */
var replaceSpace = function(s) {
    s = s.split('');
    let oldLen = s.length;
    let spaceCount = 0;
    for(let i = 0; i < oldLen; i++){
        if(s[i] === ' ')spaceCount++;
    }
    s.length += spaceCount * 2;
    for(let i = oldLen - 1, j = s.length - 1; i >= 0; i--, j--){
        if(s[i] !==' ')s[j] = s[i];
        else{
            s[j - 2] = '%';
            s[j - 1] = '2';
            s[j] = '0';
            j -= 2;
        }
    }
    return s.join('')
};

var replaceSpace = function(s) {
    s = s.split('');
    for(let i =0; i < s.length;i ++){
        if(s[i] == ' ')s[i] = '%20';
    }
    return s.join('')
};

`https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/solution/tu-jie-guan-fang-tui-jian-ti-jie-ti-huan-3l74/`