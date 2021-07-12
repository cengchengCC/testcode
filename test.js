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
