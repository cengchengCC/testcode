/**
 * 1099. 小于 K 的两数之和
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var twoSumLessThanK = function(nums, k) {
    nums.sort((a, b) => a - b);
    let ans = -1;
    let [left, right] = [0, nums.length - 1];
    while(left < right){
        if(nums[left] + nums[right] < k){
            ans = Math.max(ans, nums[left] + nums[right]);
            left ++;
        }else{
            right --;
        }
    }
    return ans
};