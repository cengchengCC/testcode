const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2

// expected output: "cheese"
var a = this;
Function.prototype.myApply = function(context, args = []){
    let cxt = context || a;
    let func = Symbol();
    cxt[func] = this;

    args = args ? args : [];

    const res = args.length > 0 ? cxt[func](...args) :cxt[func]();

    delete cxt[func];
    return res;
}



console.log(Math.max.myApply(null, numbers));
console.log(Math.min.myApply(null, numbers));