//剑指 Offer 32 - II. 从上到下打印二叉树 II

//BFS
// var levelOrder = function(root) {
//     if(!root) return [];
//     let queue=[];
//     let arr=[];
//     queue.push(root);

//     while(queue.length){
//         let length = queue.length;
//         let level=[]
//         while(length--){
//             let node=queue.shift()
//             level.push(node.val)
//             if(node.left){
//                 queue.push(node.left)
//             }
//             // if(node.right){
//             //     queue.push(node.right)
//             // }
//             node.right && queue.push(node.right)
//         }
//         arr.push(level)
//     }
//     return arr
// };

DFS
https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/solution/yan-du-you-xian-sou-suo-by-shetia-2/