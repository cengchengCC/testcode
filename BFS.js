// 102. 二叉树的层序遍历

var levelOrder = function(root) {
    let queue=[];
    let result=[]
    if(!root)return result;
    queue.push(root);
    while(queue.length){
        let length=queue.length;
        let array=[];
        while(length--){
            let node=queue.shift();
            node.left&&queue.push(node.left)
            node.right&&queue.push(node.right)
            array.push(node.val)
        }
        result.push(array)
    }
    return result
};

// var levelOrder = function(root) {
//     let res=[]
//     if(!root)return [];
//     traversal(root,0)
//     function traversal(node,depth){
//         if(!node)return []
//         if(!res[depth]){
//             res[depth]=[]
//         }
//         res[depth].push(node.val);
//         traversal(node.left,depth+1);
//         traversal(node.right,depth+1);
//     }
//     return res
// };
// 559. N叉树的最大深度
var maxDepth = function(root) {
    if(!root) return 0;
    let queue = [];
    let level = 0;
    queue.push(root);

    while(queue.length) {
        let length = queue.length;
        while(length -- ) {
            let node = queue.shift();
            node.children && (queue = queue.concat(node.children));
        }
        level ++;
    }
    return level;
};

// 作者：cecilia-25
// 链接：https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/solution/shen-du-you-xian-he-yan-du-you-dian-by-cecilia-25/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

