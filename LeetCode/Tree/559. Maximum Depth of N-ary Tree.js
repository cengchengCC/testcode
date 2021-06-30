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