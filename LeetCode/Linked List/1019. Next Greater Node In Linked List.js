var nextLargerNodes = function(head) {
    if(!head)return []
    function query(node, arr){
        if(!node.next){
            arr.push(0)
            return arr
        }
        let cur = node.val,
            next = node.next,
            max = 0;
        while(next){
            if(next.val > cur)break
            next = next.next
        }
        max = next ? next.val : max;
        arr.push(max)
        return query(node.next, arr)
    }
    var res = query(head, [])
    return res
};
//O(n2)
var nextLargerNodes = function (head) {
    let arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    let task = []
    let int = new Array(arr.length).fill(0)


    for (let i = 0; i < arr.length; i++) {
        while (task.length && arr[task[task.length - 1]] < arr[i]) {
            let j = task.pop()
            int[j] = arr[i]
        }
        task.push(i)

    }
    return int
};