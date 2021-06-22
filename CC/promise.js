// class Promise{
//     constructor(executor){
//         const resolve = () => {},
//             reject = () => {};
//         executor(resolve, reject)
//     }
// }

//new Promise(executor)， executor 两个参数，resolve，reject
//Promise 内部有三个状态，pending、fulfilled、rejected，
//初始是 pending，调用 resolve 后变为 fulfilled,，调用 reject 后变为 rejected。
//fulfilled 时会调用 then 注册的成功的回调，rejected 时会调用 then 注册的失败的回调。

// Promise 内部状态
const STATUS = { PENDING: 'PENDING', FUFILLED: 'FUFILLED', REJECTED: 'REJECTED' }

function resolvePromise(x, promise2, resolve, reject){
    if(promise2 === x){
        return reject(new TypeError("quote self"))
    }

    if((typeof x === "object" && x !==null) || typeof x === "function"){
        let called;
        try{

            let then = x.then;
            if(typeof then == "function"){

                then.call(x, function(y){

                })
            }
        }catch(e){
            
        }
    }
}

class Promise{
    constructor(executor){
        this.status = STATUS.PENDING;
        this.value = undefined;     // success value
        this.reason =  undefined;   //fault value
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        const resolve = (val) => {
            if(val instanceof Promise){
                return val.then(resolve, reject)
            }

            if(this.status == STATUS.PENDING){
                this.status = STATUS.FUFILLED;
                this.value = val;
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        };
        const reject = (reason) => {
            if(this.status == STATUS.PENDING){
                this.status = STATUS.REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn =>fn());
            }
        };
        // console.log("*********")
        try{
            executor(resolve, reject)
        }catch(e){
            reject(e)
        }
    }
    then(onFulfilled, onRejected){
        let promise2 = new Promise((resolve, reject) =>{
            if(this.status === STATUS.FUFILLED){
                try{
                    let x = onFulfilled(this.value);
                    resolve(x);
                }catch(e){
                    reject(e);
                }
            }
            if(this.status === STATUS.REJECTED){
                try{
                    let x = onRejected(this.reason);
                    resolve(x)
                }catch(e){
                    reject(e)
                }
            }
            if(this.status === STATUS.PENDING){
                this.onResolvedCallbacks.push(() => {
                    try{
                        let x = onFulfilled(this.value);
                        resolve(x);
                    }catch(e){
                        reject(e);
                    }
                })
                this.onRejectedCallbacks.push(() => {
                    try{
                        let x = onRejected(this.reason);
                        resolve(x)
                    }catch(e){
                        reject(e);
                    }
                })
            }
        })
        return promise2
    }
    catch(onRejected){
        return this.then(null, onRejected)
    }
}

const p = new Promise((resolve, reject) => {
    // resolve(20)
    setTimeout(() => resolve(20), 1000)
})
p.then(data => {
    console.log(data)
    return data;
})
.then(a => console.log("a: " + a))
.then(d => {
    throw new Error("error :CC")
})
.catch(e => console.log("Error:" + e))

Promise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise((resolve,reject)=>{
        dfd.resolve = resolve;
        dfd.reject = reject
    })
    return dfd;
}

module.exports = Promise