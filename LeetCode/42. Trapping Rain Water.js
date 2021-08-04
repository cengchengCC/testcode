/**
 * 42. 接雨水
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let [left, right, lmax, rmax] = [0, height.length - 1, height[0], height[height.length - 1]];
    let ans = 0;
    while(left < right){
        if(height[left] < height[right]){
            lmax = Math.max(height[left], lmax);
            ans+= lmax - height[left];
            left++;
        }else{
            rmax = Math.max(height[right], rmax);
            ans += rmax - height[right];
            right --;
        }
    }
    return ans
};

//双指针法
//时间复杂度：O(n)
//空间复杂度：O(1)

var trap = function(height) {
    let ans = 0;
    const stack = [],
        n = height.length;
    for(let i = 0; i < n; ++i){
        while(stack.length && height[i] > height[stack[stack.length - 1]]){
            const top = stack.pop();
            if(!stack.length){
                break;
            }
            const left = stack[stack.length]
        }
    }
    return ans
};