//167. 两数之和 II - 输入有序数组

//二分查找
var twoSum = function(numbers, target) {
    var l = 0, r = numbers.length -1, sum = 0;
    while(l < r){
        if(numbers[l] + numbers[r] > target){
            r --
        }else if(numbers[l] + numbers[r] < target){
            l ++
        }else{
            return [l + 1, r + 1]
        }
    }
};
//动态规划

// var twoSum = function(numbers, target) {
//     var a = 0;
//     for(var i = 0, len= )
//     while(l < r){
//         if(numbers[l] + numbers[r] > target){
//             r --
//         }else if(numbers[l] + numbers[r] < target){
//             l ++
//         }else{
//             return [l + 1, r + 1]
//         }
//     }
// };