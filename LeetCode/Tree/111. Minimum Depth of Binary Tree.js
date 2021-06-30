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
var minDepth = function(root) {
    if(!root){
        return 0;
    }else if(!root.left && !root.right){
        return 1;
    }else{
        let ans = Number.MAX_SAFE_INTEGER;
        if(root.left){
            ans = Math.min(minDepth(root.left), ans)
        }
        if(root.right){
            ans = Math.min(minDepth(root.right), ans)
        }
        return ans + 1
    }
};

var minDepth = function(root) {
    if(!root){
        return 0;
    }
    const q = [[root, 1]];
    while(q.length){
        const [n, l] = q.shift()

        if(!n.left&&!n.right){
            return l
        }
        if(n.left)q.push([n.left, l + 1])
        if(n.right)q.push([n.right, l + 1])
    }
};