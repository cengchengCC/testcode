// 1713. 得到子序列的最少操作次数

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
 var minOperations = function(target, arr) {
    const n = target.length;
    const pos = new Map();
    for(let i = 0; i < n;i++){
        pos.set(target[i], i);
    }

    const d = [];
    for(const val of arr){
        if(pos.has(val)){
            const idx = pos.get(val);
            const it = binarySearch(d, idx);
            if(it !== d.length){
                d[it] = idx;
            }else{
                d.push(idx);
            }
        }
    }
    return n - d.length
};

const binarySearch = (d, target) =>{
    const size = d.length;
    if(size ==0 || d[size - 1] < target){
        return size;
    }
    let low = 0, high = size - 1;
    while(low < high){
        const mid = Math.floor((high - low)/2) + low;
        if(d[mid] < target){
            low = mid + 1;
        }else{
            high = mid;
        }
    }
    return low;
}

// https://leetcode-cn.com/problems/minimum-operations-to-make-a-subsequence/solution/guan-fang-ti-jie-zhi-ti-jie-by-panxiaoan-g4f4/