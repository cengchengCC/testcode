/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let sum = 0;
    mergeSort(nums);
    return sum

    function mergeSort(nums){
        if(nums.length < 2)return nums;
        const mid = parseInt(nums.length/2),
            left = nums.slice(0, mid),
            right = nums.slice(mid);
        return merge(mergeSort(left), mergeSort(right))
    }

    function merge(left, right){
        let res = [];
        let leftLen = left.length;
        let rightLen = right.length;
        let len = leftLen + rightLen;
        for(let index = 0, i = 0, j = 0; index < len; index ++){
            if(i >= leftLen)res[index] = right[j++];
            else if(j >= rightLen)res[index] = left[i++];
            else if(left[i] <= right[j])res[index] = left[i++];
            else{
                res[index] = right[j++];
                sum += leftLen - i;//left left Element
            }
        }
        return res
    }
};
//O(NlogN)
//https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/solution/ni-yi-ding-neng-kan-dong-de-gui-bing-jie-fa-by-tan/
console.log(reversePairs([7,5,6,4]))