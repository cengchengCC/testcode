/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    var arr = s.split(''),
        map = new Map();
    for(let i of arr){
        map.set(i, map.get(i) == undefined ? 0 : map.get(i) + 1)
    }
    return [...map.keys()].length
};