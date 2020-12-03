//简单工厂模式
function createBook(name,time,type){
	var o=new Object();
	o.name=name;
	o.time=time;
	o.type=type;
	o.getName=function(){
		console.log(this.name);
	}
	return o;
}

var book1=createBook("js book",2015,"css");
var book2=createBook("css book",2013,"css");
book1.getName();
book2.getName();

//工厂模式

var Factory=function(type,content){
	if(this instanceof Factory){
		var s=new this[type](content);
		return s;
	}else{
		return new Factory(type,content);
	}
}
Factory.prototype={
	Java:function(content){
		//......
	},
	Javascript:function(content){
		//....
	},
	UI:function(content){
		this.content=content;
		(function(content){
			console.log(this,content)
		})(content);
	}
}

var data=[
	{type:"Javascript",content:"Javascript哪家"},
	{type:'UI',content:'UI1111'}
	];

for(var i=0;i<data.length;i++){
	Factory(s[i].type,s[i].content);
}