/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    const res = new ListNode(-1);
    res.next = head;
    let curr = res;
    while(curr?.next){
        if(curr.next.val === val)curr.next = curr.next.next;
        curr = curr.next;
    }
    return res.next;
};