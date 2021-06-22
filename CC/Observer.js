class Subject{
    constructor(name){
        this.name = name
        this.observers = []
        this.state = 'xxx'
    }

    attach(observer){
        this.observers.push(observer)
    }

    setState(newState){
        this.state = newState
        this.observers.forEach(o =>{
            o.update(newState)
        })
    }
}

class Observer{
    constructor(name){
        this.name = name
    }

    update(newState){
        console.log(`${this.name}say:${newState}`)
    }
}

let sub = new Subject('1')
let mm = new Observer('22')
let jj = new Observer('33')

sub.attach(mm)
sub.attach(jj)

console.log(sub)
sub.setState('->')

// // 观察者
// class Observer {
//     constructor() {

//     }
//     update(val) {

//     }
// }
// // 观察者列表
// class ObserverList {
//     constructor() {
//         this.observerList = []
//     }
//     add(observer) {
//         return this.observerList.push(observer);
//     }
//     remove(observer) {
//         this.observerList = this.observerList.filter(ob => ob !== observer);
//     }
//     count() {
//         return this.observerList.length;
//     }
//     get(index) {
//         return this.observerList[index];
//     }
// }
// // 目标
// class Subject {
//     constructor() {
//         this.observers = new ObserverList();
//     }
//     addObserver(observer) {
//         this.observers.add(observer);
//     }
//     removeObserver(observer) {
//         this.observers.remove(observer);
//     }
//     notify(...args) {
//         let obCount = this.observers.count();
//         for (let index = 0; index < obCount; index++) {
//             this.observers.get(i).update(...args);
//         }
//     }
// }