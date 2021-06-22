if(!Object.is){
    Object.defineProperty(Object, "is", {
        value: function(x, y){
            if(x === y){
                return x !== 0 || 1/x === 1/y;
            }else{
                return x !== x && y !== y
            }
        }
    })
}

Object.create2 = function(proto, propertyObject = undefined){
    if(typeof proto !== 'object' && typeof proto !== 'function'){
        throw new TypeError("Object protype may only be an Object or null.")
    }
    if(propertyObject == null){
        new TypeError("cannot convert undefined or null to object")
    }

    function F(){}
    F.prototype = proto;
    const obj = new F()
    if(propertyObject != undefined){
        Object.defineProperties(obj, propertyObject)
    }
    // if(proto === null){
    //     obj._proto_ = null;
    // }
    return obj
}

Object.assign2 = function(target, ...source){
    if(target == null){
        throw new TypeError("Cannot convert undefined or null to object")
    }
    let ret = Object(target)
    source.forEach(function(obj){
        if(obj != null){
            for(let key in obj){
                ret[key] = obj[key]
            }
        }
    })
    return ret
}


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
Object.assign(target, source)
console.log(target)
console.log(Object.assign2(source, target))
console.log(source)