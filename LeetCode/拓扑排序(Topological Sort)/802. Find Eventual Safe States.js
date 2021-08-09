/**
 * 802. 找到最终的安全状态
 * @param {number[][]} graph
 * @return {number[]}
 */
 var eventualSafeNodes = function(graph) {
    const n = graph.length;
    const rg = new Array(n).fill(0).map(() => new Array());
    const inDeg = new Array(n).fill(0);
    for(let x = 0; x < n; ++x){
        for(let y of graph[x]){
            rg[y].push(x);
        }
        inDeg[x] = graph[x].length;
    }

    const queue = [];
    for(let i = 0; i < n; ++i){
        if(inDeg[i] === 0){
            queue.push(i);
        }
    }

    while(queue.length){
        const y = queue.shift();
        for(const x of rg[y]){
            if(--inDeg[x] == 0){
                queue.push(x);
            }
        }
    }

    const ans = [];
    for(let i = 0; i < n; ++i){
        if(inDeg[i] == 0)ans.push(i)
    }
    return ans
};

// 时间复杂度：O(n+m)
// 空间复杂度：O(n+m)

var eventualSafeNodes = function(graph) {
    const n = graph.length;
    const color = new Array(n).fill(0);
    const ans = [];
    for(let i = 0;i < n; ++i){
        if(safe(graph, color, i)){
            ans.push(i);
        }
    }
    return ans;
};

const safe = (graph, color, x) => {
    if(color[x] > 0)return color[x] ===2;
    color[x] = 1;
    for(const y of graph[x]){
        if(!safe(graph, color, y))return false;
    }
    color[x] = 2;
    return true;
}

// 时间复杂度：O(n+m)
// 空间复杂度：O(n)