function test(...args){
    console.log.call(this, args)
}
test([1], 2, {"a": 2})

