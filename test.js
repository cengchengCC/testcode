function test(...args){
    console.log.call(this, args)
    console.log(arguments)
}
test([1], 2, {"a": 2})

// Array.prototype.forEach2 = function(callback, thisArg){
//     if(this == null){
//         throw new Error('this is null or not defined')
//     }
//     if(typeof callback !== "function"){
//         throw new Error(callback + 'is not a function')
//     }

//     var O = Object(this)
//     var len = O.length >>> 0;

//     let k = 0
//     while(k < len){
//         if(k in O){
//             callback.call(thisArg, O[k], k, O);
//         }
//     }
// }

let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
];

function arrayToTree(items) {
    const result = [];   // 存放结果集
    const itemMap = {};  // 
      
    // 先转成map存储
    for (const item of items) {
      itemMap[item.id] = {...item, children: []}
    }
    
    for (const item of items) {
        const id = item.id;
        const pid = item.pid;
        const treeItem = itemMap[id];
        if(!itemMap[pid]){
            itemMap[pid] = {
                children: [],
            } 
        }
        if(pid == 0){
            result.push(treeItem);
        }else{
        }
        itemMap[pid].children.push(treeItem)
    }
    return JSON.stringify(result)
  }
console.log(arrayToTree(arr))
// https://juejin.cn/post/6983904373508145189
// 数组转化为Tree;