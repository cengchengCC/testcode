/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const getH = node => {
    if(!node)return 0;
    return Math.max(getH(node.left), getH(node.right)) + 1;
}
var isBalanced = function(root) {
    if(!root)return true;
    return Math.abs(getH(root.left) - getH(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};

var isBalanced = function(root){
    return getDepth(root) !== -1
}
function getDepth(node){
    if(!node)return 0;
    let left = getDepth(node.left),
        right = getDepth(node.right);
    if(left == -1 || right == -1)return -1;
    return Math.abs(left - right) > 1 ? -1 : 1 + Math.max(left, right)
}