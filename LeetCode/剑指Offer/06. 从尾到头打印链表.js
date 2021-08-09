/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
    let array=[],
    current=head;
    while(current){
        array.unshift(current.val);
        current=current.next;
    }
    return array
};

var reversePrint = function(head) {
    const res = [];
    while(head){
        res.unshift(head.val);
        head = head.next;
    }
    return res;
};