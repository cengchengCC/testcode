/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0);
    const map = {};
    for(let i = 0; i < prerequisites.length; i++){
        inDegree[prerequisites[i][0]]++;
        if(map[prerequisites[i][1]]){
            map[prerequisites[i][1]].push(prerequisites[i][0])
        }else{
            map[prerequisites[i][1]] = [prerequisites[i][0]]
        }
    }
    const queue = [];
    for(let i =0; i < inDegree.length; i++){
        if(inDegree[i] == 0)queue.push(i);
    }
    let count = 0;
    while(queue.length){
        const selected = queue.shift();
        count++;
        const toEnqueue = map[selected];
        if(toEnqueue && toEnqueue.length){
            for(let i = 0;i < toEnqueue.length; i++){
                inDegree[toEnqueue[i]]--;
                if(inDegree[toEnqueue[i]] == 0){
                    queue.push(toEnqueue[i]);
                }
            }
        }
    }
    return count === numCourses;
};

// https://leetcode-cn.com/problems/course-schedule/solution/bao-mu-shi-ti-jie-shou-ba-shou-da-tong-tuo-bu-pai-/
// BFS

var canFinish = function(numCourses, prerequisites) {
    let map = new Map();
    for (let i = 0; i < prerequisites.length; i++) {
      if (map.has(prerequisites[i][0])) {
        map.get(prerequisites[i][0]).add(prerequisites[i][1]);
      } else {
        map.set(
          prerequisites[i][0],
          new Set().add(prerequisites[i][1])
        );
      }
    }
    
    for (let i = 0; i < prerequisites.length; i++) {
      let set = new Set();
      set.add(prerequisites[i][0]);
      if (!dfs(prerequisites[i][0], set)) {
        return false;
      }
    }
  
    return true;
  
    function dfs(course, set) {
      if (!map.has(course)) return true;
      for (let pre of map.get(course).values()) {
        if (set.has(pre)) {
          return false;
        }
        set.add(pre);
        if (!dfs(pre, set)) {
          return false;
        }
        set.delete(pre);
      }
      map.delete(course)
      return true;
    }
  };