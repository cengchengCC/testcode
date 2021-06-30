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


};

//https://leetcode-cn.com/problems/meeting-rooms-ii/solution/253-hui-yi-shi-ii-you-xian-dui-lie-by-littlegirl-v/