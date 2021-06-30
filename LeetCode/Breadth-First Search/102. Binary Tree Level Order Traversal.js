/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const ret = [];
    if(!root)return ret;

    const queue = [root];
    while(queue.length){
        const currentSize = queue.length;
        ret.push([]);
        for(let i = 1; i <= currentSize; i++){
            const node = queue.shift();
            ret[ret.length - 1].push(node.val);
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right)
        }
    }
    return ret;
};
//BFS

//DFS
var levelOrder = function(root) {
    let res=[]
    if(!root)return [];
    traversal(root,0)
    function traversal(node,depth){
        if(!node)return []
        if(!res[depth]){
            res[depth]=[]
        }
        res[depth].push(node.val);
        traversal(node.left,depth+1);
        traversal(node.right,depth+1);
    }
    return res
};