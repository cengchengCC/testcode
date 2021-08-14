/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function(arr, k) {
    let heap = buildHeap(arr);

    for(let i = heap.size; i > 1; i --){
        [heap[i], heap[1]] = [heap[1], heap[i]];
        heap.size --;
        percolateDown(heap, 1);
    }
    return heap.slice(1, k+1);
};
function buildHeap(array){
    let heap = [];
    heap.size = array.length;

    for(let i = 0; i < array.length; i ++){
        heap[i + 1] = array[i];
    }

    let currentIndex = Math.floor(heap.size/2);
    while(currentIndex > 0){
        percolateDown(heap, currentIndex);
        currentIndex--;
    }
    return heap
}

function percolateDown(heap, currentIndex){
    let leftSonIndex = 2 * currentIndex,
        rightSonIndex = 2 * currentIndex + 1,
        maxValueIndex = currentIndex;

    if(leftSonIndex <= heap.size && heap[leftSonIndex] > heap[maxValueIndex]){
        maxValueIndex = leftSonIndex
    }

    if(rightSonIndex <= heap.size && heap[rightSonIndex] > heap[maxValueIndex]){
        maxValueIndex = rightSonIndex
    }

    if(currentIndex !== maxValueIndex){
        [heap[currentIndex], heap[maxValueIndex]] = [heap[maxValueIndex], heap[currentIndex]];
        percolateDown(heap, maxValueIndex)
    }
}