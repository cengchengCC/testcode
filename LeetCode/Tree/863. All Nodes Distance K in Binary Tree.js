/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const parents = new Map();
    const ans = [];

    const findParents = (node) =>{
        if(node.left !== null){
            parents.set(node.left.val, node)
            findParents(node.left)
        }
        if(node.right !== null){
            parents.set(node.right.val, node)
            findParents(node.right)
        }
    }

    findParents(root);

    const findAns = (node, from, depth)=>{
        if(node == null)return;
        if(depth == k){
            ans.push(node.val);
            return;
        }
        if(node.left !== from){
            findAns(node.left, node, depth + 1);
        }
        if(node.right !== from){
            findAns(node.right, node, depth + 1);
        }
        if(parents.get(node.val) !== from){
            findAns(parents.get(node.val), node, depth + 1);
        }
    }
    findAns(target, null, 0);
    return ans;
};
// https://leetcode-cn.com/problems/all-nodes-distance-k-in-binary-tree/solution/er-cha-shu-zhong-suo-you-ju-chi-wei-k-de-qbla/
// 深度优先搜索 + 哈希表
// 时间复杂度：O(n)
// 空间复杂度：O(n)
