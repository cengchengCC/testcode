// 1337. 矩阵中战斗力最弱的 K 行

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    let ans = [];
    for(let i = 0; i < mat.length;i++){
        ans[i] = {val: mat[i].filter(d => d== 1).length, index: i}
    }
    ans.sort((a, b) => a.val - b.val);
    return ans.slice(0, k).map(d => d.index)
};