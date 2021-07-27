var findRepeatNumber = function(nums) {
    let obj = {};
    for(let item in nums){
        if(obj[nums[item]] !== undefined){
        	return nums[item];
        }
        obj[nums[item]] = 0;
    }
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))