// function getTargetDate (startDate,days) {
//     var startTime = new Date(startDate).getTime();
//     var diff = days*86400*1000;
//     var endTime = startTime + diff;
//     return new Date(endTime)
// }
// console.log(getTargetDate('2015-10-02',10))

var parse=function(sJSON) { return eval('(' + sJSON + ')'); };

console.log(parse('{2:4}')[2])


//42. Trapping Rain Water
var trapexample = [0,1,0,2,1,0,1,3,2,1,2,1];
//双指针法
var trap = (height) =>{
	let left = 0;
	let right = height.length - 1;
	let res = 0 ;
	let leftMax = 0;
	let rightMax = 0;
	while (left < right){
		if(height[left] < height[right]){
			leftMax = Math.max(height[left], leftMax);
			res += leftMax - height[left];
			left++;
		}else{
			rightMax = Math.max(height[right], rightMax);
			res += rightMax - height[right];
			right--;
		}
	}
	return res
}
//   作者：chu-peng-fei
//   链接：https://leetcode-cn.com/problems/trapping-rain-water/solution/javascriptjie-fa-tong-su-yi-dong-42jie-y-pjc5/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

console.log(trap(trapexample))

//97. Interleaving String 交错字符串
//Dynamic Programming 动态规划
var isInterleave = function(s1, s2, s3) {
let m = s1.length,
    n = s2.length,
    t = s3.length,
    f = new Array(m+1);
    if(m+n !== t) return false;
    if(m===0) return s2 === s3;
    if(n===0) return s1 === s3;
    for(let i = 0;i <= m;i++){
      f[i] = new Array(n+1).fill(false)
    }
    f[0][0] = true
    for(let i = 0 ; i <= m; i++){
      for(let j=0; j<= n; j++){
        let p = i+j;
        if(i > 0){
			f[i][j] = f[i][j] || (f[i-1][j] && s1[i-1] ===s3[p - 1])
		}
        if(j > 0){
            f[i][j] = f[i][j] || (f[i][j-1] && s2[j-1] ===s3[p - 1])
        }
      }
    }
    return f[m][n];
};

// 作者：wenju_gao
// 链接：https://leetcode-cn.com/problems/interleaving-string/solution/javascriptcong-ti-huan-zi-fu-dao-ji-lu-wei-zhi-zai/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

var arr = [undefined, true, 2, "CC", Symbol("1"), d => d, null, new Date, new Set(), new Map()]
function newtype(obj){
    let res = Object.prototype.toString.call(obj).split(" ")[1]
    res =res.substring(0, res.length-1).toLowerCase()
    return res
}
for(let item of arr){
    // console.log(typeof(item))
    // console.log(newtype(item))
}
// undefined boolean number string symbol function object object object object
// undefined boolean number string symbol function null date set map


var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  },
}

console.log(Reflect.get(myObject, "baz"))
// Reflect.get()
// Reflect.set()
// Reflect.defineProperty()
// Reflect.getOwnPropertyDescriptor()
// Reflect.isExtensible()
// Reflect.preventExtensions()
// Reflect.ownKeys()

// let p = {
//   a: 'a'
// };

// let handler = {
//   set(target, key, value, receiver) {
//     console.log('set');
//     Reflect.set(target, key, value)
//   },
//   defineProperty(target, key, attribute) {
//     console.log('defineProperty');
//     Reflect.defineProperty(target, key, attribute);
//   }
// };

// let obj = new Proxy(p, handler);
// obj.a = 'A';
// console.log(obj)

// Reflect.has(1, "foo")


// var obj = {
//   foo: 1,
//   get bar(){ return "abc"}
// }
// obj.bar = 2
// console.log(obj.bar)
// console.log(Object.getOwnPropertyDescriptors(obj))

// function getOwnPropertyDescriptors(obj){
//     const result = {}
//     for(let key of Reflect.ownKeys(obj)){
//         result[key] = Object.getOwnPropertyDescriptor(obj, key)
//     }
//     return result
// }
// console.log(getOwnPropertyDescriptors(obj))

function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    };
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
console.log(person1 instanceof Person)  // true
console.log(person2 instanceof Person)  // true
console.log(person1 instanceof Object); //true
console.log(person1 instanceof Function)