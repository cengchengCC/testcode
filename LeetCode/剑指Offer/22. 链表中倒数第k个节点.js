/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
    let cur = head,
        next = head.next,
        m = 0;
    while(cur.next){
        let temp = next;
        next = temp.next;
        cur = cur.next;
        m ++;
    }

    cur = head;
    for(let i = 0; i < m + 1 - k; i ++){
        cur = cur.next
    }
    return cur
};

var getKthFromEnd = function(head, k) {
    let fast = head,
        slow = head,
        m = 0;
    while(fast){
        if(m >= k)slow = slow.next;
        fast = fast.next;
        m ++;
    }
    return slow
};
//双指针