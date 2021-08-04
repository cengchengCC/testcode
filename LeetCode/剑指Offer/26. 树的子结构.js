/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
    if(!A || !B)return false;
    return dfs(A,B) || isSubStructure(A.left, B) ||isSubStructure(A.right, B);

    function dfs(a, b){
        if(!b)return true;
        if(!a || a.val !== b.val)return false;
        return dfs(a.left, b.left) && dfs(a.right, b.right)
    }
};