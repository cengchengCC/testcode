//485. 最大连续 1 的个数
var findMaxConsecutiveOnes = function(nums) {
    if(nums[0] !== 1){
        nums[0] = 0
    }
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === 1){
            nums[i] = nums[i-1] + 1
        }else if(nums[i] !== 1){
            nums[i]=0
        }
    }
    return Math.max(...nums)
}
// 链接：https://leetcode-cn.com/problems/max-consecutive-ones/solution/dong-tai-gui-hua-by-yyykkk/

var findMaxConsecutiveOnes = function(nums) {
    let count = 0
    let maxcount = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            count += 1
        }else{
            maxcount = Math.max(maxcount, count)
            count = 0
        }
    }
    return Math.max(maxcount, count)
}

//495. 提莫攻击
var findPoisonedDuration = function (timeSeries, duration) {
    if(timeSeries.length === 0 ) return 0; //no attack
    let res = 0;
    for(let i = 1; i < timeSeries.length; i++){
        const gap = timeSeries[i] - timeSeries[i - 1];
        if(duration > gap){
            res += gap;
        }else{
            res += duration;
        }
    }
    return res + duration;
};
//链接：https://leetcode-cn.com/problems/teemo-attacking/solution/shou-hua-tu-jie-jian-dan-er-you-qu-de-ti-mu-yi-ci-/



