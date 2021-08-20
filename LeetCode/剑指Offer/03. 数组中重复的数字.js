var findRepeatNumber = function(nums) {
    let obj = {};
    for(let item in nums){
        if(obj[nums[item]] !== undefined){
        	return nums[item];
        }
        obj[nums[item]] = 0;
    }
};
var findRepeatNumber = function(nums) {
    let map = new Map();
    for(let i of nums){
        if(map.has(i)) return i;
        map.set(i, 1);
    }
    return null;
};
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))