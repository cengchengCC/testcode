/**
 * 1109. 航班预订统计
 * 方法一：差分
 * O(n+m)
 * O(1)
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
 var corpFlightBookings = function(bookings, n) {
    const nums = new Array(n).fill(0);
    for(const booking of bookings){
        nums[booking[0] - 1] += booking[2];
        if(booking[1] < n){
            nums[booking[1]] -= booking[2];
        }
    }
    for(let i = 1;i < n; i ++){
        nums[i] += nums[i - 1];
    }
    return nums
};

// https://leetcode-cn.com/problems/corporate-flight-bookings/solution/gong-shui-san-xie-yi-ti-shuang-jie-chai-fm1ef/