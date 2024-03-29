/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    if(k <= 1)return nums;
    const res = [];
    for(let i =0; i < nums.length - k + 1; ++i){
        res.push(Math.max(...nums.slice(i, i + k)));
    }
    return res;
};
//O(nk)
//O(n)

//https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/solution/san-chong-jie-fa-bao-li-fa-dong-tai-gui-hua-shuang/
//DP
var maxSlidingWindow = function(nums, k) {
    if(k === 1)return nums;
    //k == 1;return 原数组

    const length = nums.length;
    if(!length)return [];

    const left = new Array(length);
    const right = new Array(length);

    left[0] = nums[0];
    right[length - 1] = nums[length - 1];

    for(let i = 1; i < length; ++ i){
        if(i % k){
            left[i] = Math.max(nums[i], left[i - 1])
        }else{
            left[i] = nums[i];
        }

        let j = length - 1 - i;
        if((j + 1) % k){
            right[j] = Math.max(nums[j], right[j + 1]);
        }else{
            right[j] = nums[j];
        }
    }

    const res = [];

    for(let i = 0; i < length - k + 1; i++){
        res.push(Math.max(right[i], left[i + k - 1]));
    }
    return res;

};