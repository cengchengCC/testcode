/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len = nums1.length + nums2.length,
        nums = [...nums1, ...nums2].sort((a, b) => a - b),
        res = len % 2 == 0 
            ? (nums[len/2] + nums[len/2 - 1])/2
            : nums[Math.floor(len/2)];
    return res
};

//O((n + m)log(n + m))
//O(n + m)

var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length){
        [nums1, nums2] = [nums2, nums1]
    }

    let m = nums1.length;
    let n = nums2.length;

    let left = 0;
    let right = m;

    let median1 = 0;
    let median2 = 0;

    while(left < right){
        const i = left + Math.floor((right - left) / 2),
            j = Math.floor((m + n + 1)/ 2) - i;
            
    }
};
// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/4-xun-zhao-liang-ge-zheng-xu-shu-zu-de-z-6aio/

console.log(findMedianSortedArrays([3], [-1, -2]))