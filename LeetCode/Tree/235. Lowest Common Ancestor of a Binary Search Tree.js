/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    var r = [], dfs = (n, a) => {
        a.unshift(n), n === p && r.push(a), n === q && r.push(a)
        r.length < 2 && (n.left && dfs(n.left, a.slice()), n.right && dfs(n.right, a.slice()))
    }
    return dfs(root, []) || r[0].some(n => r[1].some(m => m === n) && (r = n)) && r
};

// 作者：mantoufan
// 链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solution/somexun-huan-di-gui-4xing-dai-ma-chao-90-by-mantou/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。