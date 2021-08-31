/**
 * 300. 最长递增子序列
 * 时间复杂度：O(n^2)，空间复杂度O(n)
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1);

    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp,0)
};


/**
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-di-zeng-zi-xu-lie-dp-by-zxhnex-9ygh/
 * 耐性排序
 * O(nlogn),O(n)
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    const top = [];
    let piles = 0;
    for(let i =0; i < nums.length; i++){
        let poker = nums[i];

        let left = 0, right = piles;
        while(left < right){
            const mid = Math.floor((left + right)/2);
            if(top[mid] > poker){
                right = mid;
            }else if(top[mid] < poker){
                left = mid + 1;
            }else{
                right = mid;
            }
        }
        if(left == piles)piles++;
        top[left] = poker;
    }
    return piles;
};


/**
 * 354. 俄罗斯套娃信封问题
 * O(n2)
 * O(n)
 * @param {number[][]} envelopes
 * @return {number}
 */
 var maxEnvelopes = function(envelopes) {
    envelopes.sort((a, b) => a[0] - b[0]);

    const len = envelopes.length;
    var dp = new Array(len).fill(1);

    for(let i = 0; i < len; i ++){
        for(let j = 0; j < i; j++){
            if(envelopes[i][1] > envelopes[j][1] && envelopes[i][0] > envelopes[j][0]){
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
    }

    return Math.max.apply(this, dp)
};



/**
 * 674. 最长连续递增序列
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    let ans = 0;
    const n = nums.length;
    let start = 0;
    for(let i = 0; i < n; i++){
        if(i > 0 && nums[i] <= nums[i - 1]){
            start = i;
        }
        ans = Math.max(ans, i - start + 1);
    }
    return ans;
};