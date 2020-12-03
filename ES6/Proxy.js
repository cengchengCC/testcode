// var obj =new Proxy({},{
// 	get(target,key,reciever){
// 		console.log('get ${key}!');
// 		return Reflect.get(target,key,reciever);
// 	},
// 	set:(target,key,reciever)=>{
// 		console.log('set ${key}');
// 		return Reflect.set(target,key,reciever);
// 	}
// })
// obj.count=1
// ++obj.count
// var proxy = new Proxy({}, {
//   get: function(target, property) {
//     return 35;
//   }
// });

// obj = Object.create(proxy);
// console.log(obj.time) // 35

// var person = {
//   name: "CC"
// };

// var proxy=new Proxy(person,{
// 	get:function(target,property){
// 	if (property in target) {
//       return target[property];
//     } else {
//       throw new ReferenceError("Property \"" + property + "\" does not exist.");
//     }
// 	}
// })
// console.log(proxy.name) // "CC"
// try{
// 	proxy.age // 抛出一个错误
// }
// catch(e){
// 	console.log(e)
// }

// var proto = new Proxy({}, {
//   get(target, propertyKey, receiver) {
//     console.log('GET ' + propertyKey);
//     return target[propertyKey];
//   }
// });

// var obj = Object.create(proto);
// console.log(obj.foo) // "GET foo"

// function createArray(...elements) {
//   let handler = {
//     get(target, propKey, receiver) {
//       var index = Number(propKey);
//       if (index < 0) {
//         propKey = String(target.length + index);
//       }
//       return Reflect.get(target, propKey, receiver);
//     }
//   };

//   var target = [];
//   target.push(...elements);
//   return new Proxy(target, handler);
// }

// var arr = createArray('a', 'b', 'c');
// console.log(arr['1']) // c

// var pipe = (function () {
//   return function (value) {
//     var funcStack = [];
//     var oproxy = new Proxy({} , {
//       get : function (pipeObject, fnName) {
//         if (fnName === 'get') {
//           return funcStack.reduce(function (val, fn) {
//             return fn(val);
//           },value);
//         }
//         funcStack.push(this.fnName);
//         return oproxy;
//       }
//     });

//     return oproxy;
//   }
// }());

// var double = n => n * 2;
// var pow    = n => n * n;
// var reverseInt = n => n.toString().split("").reverse().join("") | 0;

// console.log(pipe(3).double.pow.reverseInt.get); // 63

// const proxy=new Proxy({},{
// 	get:function(target,property,reciever){
// 		return reciever;
// 	}
// })

// const d=Object.create(proxy)
// console.log(d.a===d)

// const target=Object.defineProperties({},{
// 	'foo':{
// 		value:23,
// 		writable:false,
// 		configurable:false
// 	}
// })

// const hander={
// 	get(target,properKey){
// 		return 'abc';
// 	}
// }

// const proxy=new Proxy(target,hander);

// console.log(target.foo)
// console.log(proxy.foo)


// let validator={
// 	set:function(obj,prop,value){
// 		if(prop==='age'){
// 			if(!Number.isInteger(value)){
// 				throw new TypeError('This age is not an integer');
// 			}
// 			if(value>200){
// 				throw new RangeError('This age seems invalid');
// 			}
// 		}
// 		obj[prop]=value
// 	}

// }
// let person = new Proxy({}, validator);

// person.age = 100;

// person.age // 100
// // person.age = 'young' // 报错
// person.age = 300 // 报错
// 'use strict'

// const handler={
// 	get (target,key,reciever){
// 		invariant(key,'get');
// 		// return target[key];
// 		return reciever
// 	},
// 	set (target,key,value,reciever){
// 		invariant(key,'set')
// 		target[key]=value;
// 		return true;
// 	}
// }

// function invariant(key,action){
// 	if(key[0]==='_'){
// 		throw new Error (`invalid attempt to ${action} private ${key} property`);
// 	}
// }
// const target={};
// const proxy=new Proxy(target,handler);
// // proxy._prop
// // proxy._prop=3
// proxy.prop=3
// console.log(proxy.prop)
// console.log(target)

let p = {
    a: 'a'
  };
  
  let handler = {
    set(target, key, value, receiver) {
      console.log('set');
      Reflect.set(target, key, value)
    },
    defineProperty(target, key, receiver) {
      console.log('defineProperty');
      Reflect.defineProperty(target, key, receiver);
    }
  };
  
  let obj = new Proxy(p, handler);
  obj.a = 'A';