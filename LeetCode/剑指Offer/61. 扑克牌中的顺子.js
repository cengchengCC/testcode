/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isStraight = function(nums) {
    nums.sort((a, b) => a - b);
    var min = 14, max = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0)continue;
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[i]);
        if(nums[i] === nums[i + 1])return false;
    }
    return max - min < 5;
};