class Promise{
    constructor(executor){
        const resolve = () => {},
            reject = () => {};
        executor(resolve, reject)
    }
}

//new Promise(executor)， executor 两个参数，resolve，reject
//Promise 内部有三个状态，pending、fulfilled、rejected，
//初始是 pending，调用 resolve 后变为 fulfilled,，调用 reject 后变为 rejected。
//fulfilled 时会调用 then 注册的成功的回调，rejected 时会调用 then 注册的失败的回调。

// Promise 内部状态
const STATUS = { PENDING: 'PENDING', FUFILLED: 'FUFILLED', REJECTED: 'REJECTED' }

class Promise{
    constructor(executor){
        this.status = STATUS.PENDING;
        this.value = undefined;     // success value
        this.reason =  undefined;   //fault value
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        const resolve = (val) => {
            if(this.status == STATUS.PENDING){
                this.ststus = STATUS.FUFILLED;
                this.value = val;
                this.onResolvedCallbacks.forEach(fn => fn);
            }
        };
        const reject = (reason) => {
            if(this.status == STATUS.PENDING){
                this.status = STATUS.REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn =>fn())
            }
        };
        try{
            executor(resolve, reject)
        }catch(e){
            reject(e)
        }
    }
    then(onFulfilled, onRejected){
        if(this.status == STATUS.FUFILLED){
            onFulfilled(this.value)
        }
        if(this.status == STATUS.REJECTED){ 
            onRejected(this.reason)
        }
        if(this.status === STATUS.PENDING){
            this.onResolvedCallbacks.push(() => {
                onFulfilled(this.value)
            })
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason)
            })
        }
        let promise2 = new Promise((resolve, reject) =>{
            if(this.status === STATUS.FUFILED){
                try{
                    let x = onFulfilled(this.value);
                    resolve(x);
                }catch(e){
                    reject(e)
                }
            }
            if(this.status === STATUS.REJECTED){
                try{
                    let x = onRejected(this.reason);
                    resolve(x);
                }catch(e){
                    reject(e);
                }
            }
            if(this.status === STATUS.PENDING){
                this.onResolvedCallbacks.push(() => {
                    try{
                        let x = onFulfilled(this.value);
                        resolve(x)
                    }catch(e){
                        reject(e)
                    }
                })
                this.onRejectedCallbacks.push(() => {
                    try {
                        let x = onRejected(this.reason);
                        resolve(x)
                    }catch(e){
                        reject(e)
                    }
                })
            }
        })
        return promise2
    }
}

//https://www.jianshu.com/p/818bfe22eefd