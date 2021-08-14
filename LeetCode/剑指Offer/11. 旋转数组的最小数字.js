/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    var left = 0, right = numbers.length - 1;
    while(left < right){
        const mid = left + Math.floor((right - left)/2);
        if(numbers[mid] > numbers[right]){
            left = mid + 1;
        }else if(numbers[mid] < numbers[right]){
            right = mid
        }else{
            right -= 1;
        }
    }
    return numbers[left]
};

//O(lgn)
//O(1)