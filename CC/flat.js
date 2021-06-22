console.log([1, [2, [3]]].flat(2))  // [1, 2, 3]


// function flatten(arr){
//     var result = [];
//     for(var i = 0, len = arr.length; i < len;i++){
//         if(Array.isArray(arr[i])){
//             result = result.concat(flatten(arr[i]))
//         }else{
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

// function flatten(arr){
//     while(arr.some(d => Array.isArray(d))){
//         arr = [].concat(...arr)
//     }
//     return arr;
// }

function flatten(arr){
    for(var i = 0;i < arr.length; i++){
        if(Array.isArray(arr[i])){
            flatten(arr[i]);
            let len = arr[i].length;
            arr.splice(i, 1, ...arr[i]);
            i += len - 1;
        }
    }
}
var a = [1, [2, [3]]]
flatten(a)
console.log(a)