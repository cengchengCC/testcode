let list = [84, 83, 88, 87, 61, 50, 70, 60, 80]

function bubbleSort(array){
    console.log(array.join("  "))
    let len = array.length;
    for(let i = 0;i< len - 1;i++){
        for(let j = 0; j < len - 1 - i;j++){
            if(array[j] > array[j + 1]){
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
        console.log(array.join("  "))
    }
}
// bubbleSort(list)

function selectionSort(array){
    console.log(array.join("  "))

    let len = array.length;
    let minIndex;
    for(let i = 0; i < len - 1; i++){
        minIndex = i;
        for(let j = i + 1;j < len; j++){
            if(array[j] < array[minIndex]){
                minIndex = j
            }
        }
        [array[minIndex], array[i]] = [array[i], array[minIndex]]
        console.log(array.join("  "))
    }
}

// selectionSort(list)

function insertionSort(array){
    console.log(array.join("  "))

    let len = array.length;
    for(let i = 0; i < len; i++){
        let unSortValue = array[i];
        let currentIndex = i - 1;
        while((currentIndex >= 0) && (array[currentIndex] > unSortValue)){
            array[currentIndex + 1] = array[currentIndex]
            currentIndex --;
        }
        array[currentIndex + 1] = unSortValue
        console.log(array.join("  "))
    }
}

// insertionSort(list)

function shellSort(array){
    console.log(array.join("  "))

    let len = array.length;
    for(let gap = Math.ceil(len / 2); gap > 0 ; gap = Math.floor(gap/2)){
        for(let i = gap; i < len; i++){
            let unSortValue = array[i]
            let currentIndex = i - gap; 
            while((currentIndex >= 0) && array[currentIndex] > unSortValue){
                array[currentIndex + gap] = array[currentIndex]
                currentIndex -= gap;  
            }

        }
        console.log(array.join("  "))
    }
}

function mergeSort(array){
    let len = array.length

    if(len < 2)return array
    let middle = Math.floor(len/2),
        left = array.slice(0, middle),
        right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
    let result = []

    while((left.length > 0) && (right.length > 0)){
        if(left[0] <= right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }

    while(left.length){
        result.push(left.shift())
    }

    while(right.length){
        result.push(right.shift())
    }
    return result
}

// console.log(mergeSort(list))

let sortList = [84, 83, 88, 87, 61, 50, 70, 60, 80]

function quickSort2(array, left, right){
    var left = typeof left !== 'number' ? 0 : left,
        right = typeof right !== 'number' ? array.length - 1 : right;
    
    if(left == right)return
    else if(left + 1 === right){
        if(array[left] == array[right])return
        else {
            [array[left], array[right]] = [array[right], array[left]];
            return
        }
    }

    let pivot =  median3(array, left, right),
        i = left + 1,
        j = right - 2;

    while(i < j){
        while(array[i] < pivot)i++;
        while(array[j] > pivot)j--;

        if(i < j){
            if(array[i] === array[j]){
                i++
            }else{
                [array[i], array[j]] = [array[j], array[i]];
            }
        }else{
            break
        }
    }

    [array[i], array[right - 1]] = [array[right - 1], array[i]];

    quickSort2(array, left, i - 1);
    quickSort2(array, i + 1, right)
}

function median3(array, left, right){
    let center = Math.floor((left + right) / 2);

    if(array[center] < array[left]){
        [array[left], array[center]] = [array[center], array[left]];
    }

    if(array[right] < array[left]){
        [array[left], array[right]] = [array[right], array[left]];
    }

    if(array[right] < array[center]){
        [array[center], array[right]] = [array[right], array[center]];
    }

    [array[center], array[right - 1]] = [array[right - 1], array[center]];

    return array[center]
}

// console.log(sortList)
// quickSort2(sortList)
// console.log(sortList)

function heapSort(array){
    let heap = buildMap(array);
    
    for(let i = heap.size; i > 1; i --){
        [heap[i], heap[1]] = [heap[1], heap[i]];
        heap.size--;
        percolateDown(heap, 1);
    }
}

function buildHeap(array){
	let heap = [];
	heap.size = array.length;
	for(let i = 0;i < array.length; i++){
		heap[i + 1] = array[i];
	}

	let currentIndex = Math.floor()
}