/**
 * 611. 有效三角形的个数
 * @param {number[]} nums
 * @return {number}
 */
 var triangleNumber = function(nums) {
    const len = nums.length;
    nums.sort((a, b) => a - b);
    let res = 0;
    for(let k = len - 1; k >= 2; k --){
        let [left, right] = [0, k - 1];
        while(left < right){
            if(nums[left] + nums[right] > nums[k]){
                res += right - left;
                right --;
            }else{
                left++
            }
        }
    }
    return res
};

// 时间复杂度：O(n^2)
// 空间复杂度：O(n)
// https://leetcode-cn.com/problems/valid-triangle-number/solution/teng-xun-leetcode611you-xiao-san-jiao-xing-de-ge-s/

var triangleNumber = function(nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    let res = 0;
    for(let i = 0; i < n; ++i){
        for(let j = i + 1; j < n ; ++j){
            let left = j + 1,right = n - 1, k = j;
            while(left <= right){
                const mid = Math.floor((left + right)/2);
                if(nums[mid] < nums[i] + nums[j]){
                    k = mid;
                    left = mid + 1;
                }else{
                    right = mid - 1;
                }
            }
            res += k - j;
        }
    }
    return res;
}

// 时间复杂度：O(n^2logn)
// 空间复杂度：O(logn)