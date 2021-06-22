class EventEmitter{
    constructor(){
        this.events = {};
    }

    on(type, callBack){
        if(!this.events[type]){
            this.events[type] = [callBack]
        }else{
            this.events[type].push(callBack)
        }
    }

    remove(type, callBack){
        if(!this.events[type])return;
        this.events[type] = this.events[type].filter(d => d!==callBack);
    }

    once(type, callBack){
        // function fn(){
        let fn = () => {
            callBack();
            this.remove(type, fn);
        }
        this.on(type, fn);
    }

    emit(type, ...rest){
        this.events[type] && this.events[type].map(fn => fn.apply(this, rest));
    }
}

const eventEx = new EventEmitter();

const handle = (...rest) => {
    console.log(rest);
}

eventEx.on("click", handle);
eventEx.emit("click", 1, 2, 3, 4);

eventEx.remove("click", handle);

eventEx.once("dbClick", () => {
    console.log(123456);
})

eventEx.emit("dbClick")
eventEx.emit("dbClick")