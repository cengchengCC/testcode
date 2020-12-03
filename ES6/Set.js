// const s=new Set();
// [2,3,4,4].forEach(x=>s.add(x));
// for(let i of s){
//     console.log(i)
// }

// let set = new Set();

// set.add({});
// set.size // 1

// set.add({});
// a=[1]
// b=a
// set.add(a,b)
// console.log(set.size) // 2

// const items = new Set([1, 2, 3, 4, 5]);
// const array = Array.from(items);
// console.log(array)
// console.log(...items)

// let set = new Set(['red', 'green', 'blue']);

// for (let item of set.keys()) {
//   console.log(item);
// }

// let set = new Set(['red', 'green', 'blue']);

// for (let x of set) {
//   console.log(x);
// }
// console.log(set)//Set { 'red', 'green', 'blue' }
// red
// green
// blue
// console.log(set[0])//undefined

// const ws= new WeakSet();
// ws.add(1)

// const b = [3, 4];
// const ws = new WeakSet(b);
// Uncaught TypeError: Invalid value used in weak set(…)

// const m=new Map()
// const o={2:'temp'}
// m.set(o,{1:'key'})
// console.log(m) //Map { { '2': 'temp' } => { '1': 'key' } }
// console.log(m[o]) //undefined

// const m2 = new Map([['baz', 3]]);
// const m3 = new Map(m2);
// console.log(m2)
// console.log(m3)

// const map = new Map([
//   ['F', 'no'],
//   ['T',  'yes'],
// ]);

// for (let key of map.keys()) {
//   console.log(key);
// }
// // // "F"
// // // "T"

// for (let value of map.values()) {
//   console.log(value);
// }
// // // "no"
// // // "yes"

// for (let item of map.entries()) {
//   console.log(item);
// }
// const myMap = new Map()
//   .set(true, 7)
//   .set({foo: 3}, ['abc']);
// console.log([...myMap])
// console.log(myMap)
// console.log(Array.from(myMap))
// function strMapToObj(strMap) {
//   let obj = Object.create(null);
//   for (let [k,v] of strMap) {
//     obj[k] = v;
//   }
//   return obj;
// }
// strMapToJson=(strMap)=> {
//   return JSON.stringify(strMapToObj(strMap));
// }
// console.log(strMapToJson(myMap))

// const wm=new WeakMap();
// let key={}
// let obj={foo:1};
// wm.set(key,obj);
// console.log(wm)
// obj=null;
// console.log(wm.get(key));
// set=key
// key=null
// console.log(wm.get(set));
// console.log(set)

