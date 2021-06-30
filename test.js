function test(...args){
    console.log.call(this, args)
    console.log(arguments)
}
test([1], 2, {"a": 2})
