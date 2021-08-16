/**
 * 42. 连续子数组的最大和
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach(d => {
        pre = Math.max(pre + d, d);
        maxAns = Math.max(maxAns, pre);
    })
    return maxAns
};