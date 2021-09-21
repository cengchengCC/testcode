/** 
 * 135. 分发糖果
 * 方法一：两次遍历
 * O(n)
 * O(n)
 * 方法二： 常数空间遍历
 * 可分解成递增序列，递减序列（所有元素自动升1）
 */ 
/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
    let n = ratings.length;
    var arr = new Array(n).fill(0);
    arr[0] = 1;
    for(let i = 1; i < ratings.length; i++){
        if(ratings[i] > ratings[i - 1]){
            arr[i] = arr[i - 1] + 1;
        }else{
            arr[i] = 1;
        }
    }

    let right = 0; ret = 0;
    for(let i = n - 1; i >= 0; i--){
        if(i < n - 1 && ratings[i] > ratings[i + 1]){
            right ++;
        }else{
            right = 1;
        }
        ret += Math.max(arr[i], right);
    }
    return ret;
};