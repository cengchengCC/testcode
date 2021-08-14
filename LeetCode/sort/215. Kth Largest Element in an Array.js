/**
 * 215. 数组中的第K个最大元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    var heap = buildHeap(nums);

    for(let i = heap.size; i > 1; i --){
        [heap[1], heap[i]] = [heap[i], heap[1]];
        heap.size --;
        percolateDown(heap, 1);
    }
    return heap[nums.length - k + 1]
};
function buildHeap(array){
    var heap = [];
    heap.size = array.length;

    for(let i = 0; i < array.length;i++){
        heap[i + 1] = array[i];
    }
    var currentIndex = Math.floor(heap.size/2);

    while(currentIndex > 0){
        percolateDown(heap, currentIndex);
        currentIndex --;
    }
    return heap;
}
function percolateDown(heap, currentIndex){
    let leftSonIndex = 2 * currentIndex,
        rightSonIndex = 2 * currentIndex + 1,
        maxValueIndex = currentIndex;
    if(leftSonIndex <= heap.size && heap[leftSonIndex] > heap[maxValueIndex]){
        maxValueIndex = leftSonIndex;
    }

    if(rightSonIndex <= heap.size && heap[rightSonIndex] > heap[maxValueIndex]){
        maxValueIndex = rightSonIndex;
    }

    if(maxValueIndex !== currentIndex){
        [heap[maxValueIndex], heap[currentIndex]] = [heap[currentIndex], heap[maxValueIndex]];
        percolateDown(heap, maxValueIndex)
    }
}