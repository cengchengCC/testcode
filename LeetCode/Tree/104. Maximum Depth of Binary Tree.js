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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){
        return 0;
    }else{
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
    }
};

//DFS O(n)

var maxDepth = function(root) {
    if(!root) return 0;

    let max = 0,
        queue = [];
    queue.push(root);

    while(queue.length){
        let n = queue.length;
        max++;
        for(let i = 0; i < n;i ++){
            let target = queue.shift();
            if(target.left){
                queue.push(target.left)
            }
            if(target.right){
                queue.push(target.right)
            }
        }
    }
    return max;
};

//BFS O(n)