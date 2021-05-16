/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    if(head == null || head.next == null)return head
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head
    return newHead
};
// https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/liang-liang-jiao-huan-lian-biao-zhong-de-jie-di-91/
 var swapPairs = function(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    var prev = dummy
    while(head&&head.next){
        let next = head.next;
        head.next = next.next;
        next.next = head;
        prev.next = next;

        prev = head;
        head = head.next;
    }
    return dummy.next
};

// https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/shou-hua-tu-jie-24-liang-liang-jiao-huan-lian-biao/