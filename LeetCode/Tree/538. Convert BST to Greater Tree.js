/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 538. 把二叉搜索树转换为累加树
 * 方法一：反序中序遍历
 * O(n)
 * O(n)
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var convertBST = function(root) {
    let sum = 0;
    const accumlation = root =>{
        if(root === null)return;

        if(root.right)accumlation(root.right);
        sum += root.val;
        root.val = sum;
        if(root.left)accumlation(root.left);
    }
    accumlation(root);
    return root;
};