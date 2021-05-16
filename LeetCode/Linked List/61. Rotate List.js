var rotateRight = function(head, k) {
    if(k === 0 || !head || !head.next)return head

    let n = 1;
    let curr = head;
    while(curr.next){
        curr = curr.next
        n++; 
    }
    let add = n -k % n;
    if(add === n)return head

    curr.next = head;
    while(add){
        curr = curr.next;
        add --
    }

    const ret = curr.next
    curr.next = null
    return ret
}

// https://leetcode-cn.com/problems/rotate-list/solution/xuan-zhuan-lian-biao-by-leetcode-solutio-woq1/

