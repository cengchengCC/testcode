var x = 4;
const obj = {
    x: 42,
    getX: function (a) {
        return this.x + a;
    }
};

var getY = obj.getX;
console.log(getY(1))
const unboundGetX = obj.getX;
console.log(unboundGetX(1)); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(obj);
console.log(boundGetX(1));
// expected output: 42

Function.prototype.myBind = function(context, ...args){
    const fn = this;

    args = args ? args : [];

    return function newFn(...newFnArgs){
        if(this instanceof newFn){
            console.log(this)
            return new fn(...args, ...newFnArgs)
        }
        return fn.apply(context, [...args, ...newFnArgs])
    }
}

const newboundGetX = unboundGetX.myBind(obj, 3);
console.log(newboundGetX());
console.log(new newboundGetX());
console.log(unboundGetX.myBind(obj)(4))