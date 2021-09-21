/**
 * 524. 通过删除字母匹配到字典里最长单词
 * 双指针
 * O(d×(m+n))
 * O(1)
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
 var findLongestWord = function(s, dictionary) {
    let res = '';
    for(const t of dictionary){
        let i = 0, j = 0;
        while(i < t.length && j < s.length){
            if(t[i] === s[j]){
                ++i;
            }
            ++j;
        }

        if(i === t.length){
            if(t.length > res.length || (t.length === res.length && t < res)){
                res = t;
            }
        }
    }
    return res;
};

/**
 * 524. 通过删除字母匹配到字典里最长单词
 * 排序
 * O(d×m×logd+d×(m+n))
 * O(d×m)
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    let res = '';
    dictionary.sort((word1, word2) => {
        if (word1.length !== word2.length) {
            return word2.length - word1.length;
        } else {
            return word1.localeCompare(word2);
        }
    });
    for(const t of dictionary){
        let i = 0, j = 0;
        while(i < t.length && j < s.length){
            if(t[i] === s[j]){
                ++i;
            }
            ++j;
        }

        if(i === t.length){
            res = t;
        }
    }
    return res;
};

// https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting/solution/tong-guo-shan-chu-zi-mu-pi-pei-dao-zi-di-at66/