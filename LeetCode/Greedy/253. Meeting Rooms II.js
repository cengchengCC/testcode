// 252. Meeting Rooms
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] > intervals[i + 1][0])return false
    }
    return true
};

// 56. Merge Intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let i = 0;
    while(i < intervals.length - 1){
        if(intervals[i][1] >= intervals[i + 1][0]){
            const right = intervals[i + 1][1],
                left = intervals[i][1],
                mergeArr = [intervals[i][0], right > left ? right : left];
            intervals.splice(i, 2, mergeArr);
        }else {
            i ++
        }
    }
    return intervals
};

// 253. Meeting Rooms II

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if(intervals.length === 0)return 0;
    var rooms = intervals.sort((a, b) => a[0] - b[0]),
        heap = [];
    for(let i = 0; i < rooms.length; i++){
        let flag = false;
        for(let j = 0; j < heap.length; j++){
            if(heap[j] <= rooms[i][0]){
                flag = true;
                heap[j] = rooms[i][1]
                break;
            }
        }
        if(!flag)heap.push(rooms[i][1])
        //最大堆排序
        heap.sort((a, b) => a - b);
    }
    return heap.length;
};
console.log(minMeetingRooms([[0,30],[5,10],[15,20]]))
//https://leetcode-cn.com/problems/meeting-rooms-ii/solution/253-hui-yi-shi-ii-you-xian-dui-lie-by-littlegirl-v/