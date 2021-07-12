//274. H 指数
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let len = citations.length;
    let l = 0, r = len;

    while(l < r){
        mid = (l + r + 1) >> 1;
        if(checked(citations, mid))l = mid;
        else{
            r = mid - 1;
        } 
    }
    return r;
    function checked(arr, mid){
        let ans = 0;
        for(let i = 0;i < arr.length;i++)if(arr[i] >= mid)ans++;
        return ans >=mid
    }
};
//O(nlogn)
//O(1)

var hIndex = function(citations){
    citations.sort((a, b) => a -b );
    for(let i = 0; i < citations.length; i++){
        let h = citations.length - i;
        if(h <= citations[i]){
            return h;
        }
    }
    return 0
}
//O(nlogn)
//O(logn)

console.log(hIndex([3,0,6,1,5]))
// https://leetcode-cn.com/problems/h-index/solution/gong-shui-san-xie-li-yong-er-duan-xing-z-1jxw/

//275. H 指数 II
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var l = 0,
        r = citations.length;
    while(l < r){
        let mid = (l + r + 1) >> 1;
        if(citations[citations.length - mid] >= mid)l = mid;
        else r = mid - 1;
    }
    return r
};

//O(logn)
//O(1)

console.log(hIndex([0,1,3,5,6]))
