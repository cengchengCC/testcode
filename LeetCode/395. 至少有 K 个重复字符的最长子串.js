/**
 * 滑动窗口
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    const n = s.length;

    if(n < k)return 0;

    let index = 0,
    	l = 0,
    	r = 0,
    	ans = 0;

    const map = new Map();
    for(let i = 0; i < n; i++){
    	const cur = s[i];
    	if(!map.has(cur)){
    		map.set(cur, 1)
    	}else{
    		map.set(cur, map.get(cur) + 1);
    	}
    }

    if(n === k && map.size === 1)return n;

    while(index < n){
    	if(map.get(s[index]) >= k){
    		r++;
    		if(index === n - 1){
    			if(r - l >= n)return n;

    			ans = Math.max(ans, longestSubstring(s.substr(l, r), k));
    		}
    	}else{
    		if(r - l >= k){
    			if(r - l >= n)return n;
    			ans = Math.max(ans, longestSubstring(s.substr(l, r), k));
    		}
    		l = index + 1;
    		r = index + 1;
    	}
    	index++;
    }

    return ans;
};

// https://leetcode-cn.com/problems/longest-substring-with-at-least-k-repeating-characters/solution/xiang-jie-mei-ju-shuang-zhi-zhen-jie-fa-50ri1/
console.log(longestSubstring('aaaab', 3))