/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root)return 0;
    let ans = 0,
        queue = [[root, 1]];
    while(queue.length){
        let [node, l] = queue.shift();
        // if(node)
        ans = Math.max(ans, l)
        for(let i = 0; i < node.children.length; i++){
            queue.push([node.children[i], l + 1])
        }
    }
    return ans
};

var maxDepth = root => {
    if(!root)return 0;
    let max = 0;
    root.children && root.children.forEach(d => {
        d && (max = Math.max(max, maxDepth(d)))
    });
    return max + 1
}


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

