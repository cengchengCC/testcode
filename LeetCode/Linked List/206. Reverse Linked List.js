var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while(curr){
        const next = curr.next;
        curr.next = prev;
        prev =  curr;
        curr = next;
    }
    return prev
};
// https://leetcode-cn.com/problems/reverse-linked-list/solution/fan-zhuan-lian-biao-by-leetcode-solution-d1k2/
// 时间复杂度：O(n)，其中 nn 是链表的长度。需要遍历链表一次。
// 空间复杂度：O(1)
var reverseList = function(head) {
    if(head == null || head.next == null)return head

    const newHead = reverseList(head.next);
    head.next.next = head
    head.next = null;
    return newHead
};