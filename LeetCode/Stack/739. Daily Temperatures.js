var dailyTemperatures = function(temperatures) {
	if(temperatures.length < 2)return [0];
	let length = temperatures.length,
		arr = new Array(length).fill(0);
	for(let i = 0; i < length - 1; i++){
		let j = i + 1
		while(temperatures[j] <= temperatures[i] && j < length - 1)j++;
		if(j == length - 1 && temperatures[j] <= temperatures[i]){
			arr[i] = 0;
		}else{
			arr[i] = j - i;
		}
	}
	return arr
};

var dailyTemperatures = function(temperatures){
	if(temperatures.length < 2)return [0];

	let arr = new Array(temperatures.length).fill(0);
	let helpStack = [];

	for(let i = 0; i < temperatures.length; i++){
		while(helpStack.length > 0 && temperatures[i] > temperatures[helpStack[helpStack.length - 1]]){
			arr[helpStack[helpStack.length - 1]] = i - helpStack[helpStack.length - 1]
			helpStack.pop()		
		}
	helpStack.push(i)
	}
	return arr
}

//单调栈解法