/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 98. 验证二叉搜索树
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity);
};

function helper(root, lower, upper){
    if(root === null)return true;

    if(root.val <= lower || root.val >= upper)return false;

    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
}

//O(n)
//O(n)

var isValidBST = function(root){
    let stack = [],
        inborder = -Infinity;

    while(stack.length || root !== null){
        while(root !== null){
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();

        if(root.val <= inborder)return false;

        inborder = root.val;
        root = root.right;
    }
    return true;
}

//O(n)
//O(n)