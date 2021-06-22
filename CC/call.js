function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

console.log(new Food('cheese', 5).category);
console.log(new Food('cheese', 5).name);
// expected output: "cheese"

Function.prototype.myCall = function(context, ...args){
    let cxt = context || window;
    let func = Symbol();
    cxt[func] = this;

    args = args ? args : [];

    const res = args.length > 0 ? cxt[func](...args) :cxt[func]();

    delete cxt[func];
    return res;
}

function newProduct(name, price) {
    this.name = name;
    this.price = price;
}

function newFood(name, price) {
    newProduct.myCall(this, name, price);
    this.category = 'food';
}

console.log(new newFood('cheese', 5).category);
console.log(new newFood('cheese', 5).name);