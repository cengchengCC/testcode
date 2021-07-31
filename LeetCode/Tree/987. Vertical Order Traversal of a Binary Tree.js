// 987. 二叉树的垂序遍历

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
 * @return {number[][]}
 */
 var verticalTraversal = function(root) {
    let locations = [],
        key = new Map();
    dfs(root, 0, 0);
    function dfs(node, x, y){
        if(node == null){
            return;
        }else{
            if(!key.get(y)){
                locations.push(y)
                key.set(y, [[node.val, x]]);
            }else{
                key.get(y).push([node.val, x])
            }
            dfs(node.left, x + 1, y - 1);
            dfs(node.right, x + 1, y + 1);
        }
    }
    let arr = locations.sort((a,b) => a - b ).map(d => key.get(d)).map(d => {
        return d.sort((e, f)=>{
            if(e[1] == f[1]){
                return e[0] - f[0]
            }else{
                return e[1] - f[1]
            }
        }).map(e => e[0])
    })
    return arr
};

var verticalTraversal = function(root) {
    const nodes = [];
    const dfs = (node, row, col) => {
        if (node === null) {
            return;
        }
        nodes.push([col, row, node.val]);
        dfs(node.left, row + 1, col - 1);
        dfs(node.right, row + 1, col + 1);
    }
    dfs(root, 0, 0, nodes);
    nodes.sort((tuple1, tuple2) => {
        if (tuple1[0] !== tuple2[0]) {
            return tuple1[0] - tuple2[0];
        } else if (tuple1[1] !== tuple2[1]) {
            return tuple1[1] - tuple2[1];
        } else {
            return tuple1[2] - tuple2[2];
        }
    });

    const ans = [];
    let lastcol = -Number.MAX_VALUE;
    for (const tuple of nodes) {
        let col = tuple[0], value = tuple[2];
        if (col !== lastcol) {
            lastcol = col;
            ans.push([]);
        }
        ans[ans.length - 1].push(value);
    }
    return ans;
}


// https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree/solution/er-cha-shu-de-chui-xu-bian-li-by-leetcod-clsh/