// 33. 搜索旋转排序数组
var search = function(nums, target) {
    let start = 0, end = nums.length - 1;

    while(start <= end){
        const mid = start + ((end - start) >> 1);
        if(nums[mid] === target) return mid

        if(nums[mid] >= nums[start]){
            if(target >= nums[start] && target <= nums[mid]){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }else{
            if(target >= nums[mid] && target <= nums[end]){
                start = mid + 1;
            }else{
                end = mid -1;
            }
        }

    }  
    return -1
};
//https://leetcode-cn.com/problems/search-in-rotated-sorted-array/solution/pythonjs-er-fen-fa-33-sou-suo-xuan-zhuan-pai-xu-sh/