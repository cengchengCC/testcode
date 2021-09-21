/**
 * 41. 缺失的第一个正数
 * O(n)
 * O(1)
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
    let n = nums.length;
    for(let i in nums){
        if(nums[i] <= 0){
            nums[i] = n + 1;
        }
    }

    for(let i = 0; i < n; i ++){
        let num = Math.abs(nums[i]);
        if(num <= n){
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }

    for(let i = 0; i < n; i ++){
        if(nums[i] > 0){
            return i + 1;
        }
    }
    return n + 1;
};

// https://leetcode-cn.com/problems/first-missing-positive/solution/que-shi-de-di-yi-ge-zheng-shu-by-leetcode-solution/