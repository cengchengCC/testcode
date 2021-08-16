// Sliding Window

/**
 * 3. 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    const occ = new Set();
    const n = s.length;
    let rk = -1, ans = 0;
    for(let i = 0; i < n; i ++){
        if(i !== 0){
            occ.delete(s.charAt(i - 1))
        }
        while(rk + 1 < n && !occ.has(s.charAt(rk + 1))){
            occ.add(s.charAt(rk + 1));
            rk ++;
        }

        ans = Math.max(ans, rk - i + 1)
    }
    return ans;
};

var lengthOfLongestSubstring = function(s){
    let Len = s.length;
    let result = 0;

    let set = new Set();

    let left = 0;
    let right = 0;
    while(left < Len){
        while(right < Len && !set.has(s[right])){
            set.add(s[right]);
            right++;
        }
        result = Math.max(result, right - left);
        set.delete(s[left]);
        left++;
    }
    return result;
}