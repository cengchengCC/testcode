/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let left = 0,
        right = height.length - 1,
        max = Math.min(height[left], height[right]) * (right -left);
    while(left< right){
        if(height[left] < height[right]) left++
        else{
            right --
        }
        max = Math.max(max, Math.min(height[left], height[right]) * (right -left))
    }
    return max
};