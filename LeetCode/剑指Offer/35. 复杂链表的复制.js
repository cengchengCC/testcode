/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * 
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head, cachedNode = new Map()) {
    /*
    * 类似js深拷贝的最终实现版，检查元素是否已经经过处理
    * 回溯 + 哈希表
    * O(n)
    * O(n)
    */
    if (head === null) {
        return null;
    }
    if(!cachedNode.has(head)){
        cachedNode.set(head, {val: head.val});
        Object.assign(cachedNode.get(head), {next: copyRandomList(head.next, cachedNode), random: copyRandomList(head.random, cachedNode)})
    }
    return cachedNode.get(head);
}