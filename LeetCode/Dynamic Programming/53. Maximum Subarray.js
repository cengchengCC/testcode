var maxSubArray = function(nums) {
    let pre = 0, maxAns = nums [0];
    nums.forEach(d => {
        pre = Math.max(pre + d, d);
        maxAns = Math.max(maxAns, pre)
    });
    return maxAns
}
// 链接：https://leetcode-cn.com/problems/maximum-subarray/solution/zui-da-zi-xu-he-by-leetcode-solution/
