/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    var next, s = [];
    while(head){
        next = head.next;
        head.next = null;
        s.push(head);
        head = next;
    }
    var i = -1, j = s.length;
    while(++i < --j){
        s[i].next = s[j];
        j !== i + 1 && (s[j].next = s[i + 1])
    }
    return s[0]
};