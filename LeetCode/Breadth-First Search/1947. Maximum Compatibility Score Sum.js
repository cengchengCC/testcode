/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
 var maxCompatibilitySum = function(students, mentors) {
    let ans = 0
    let m = students.length    
    let n = students[0].length

    let arr = new Array(m).fill(0).map(() => new Array(m).fill(0))
    
    // 构建评分矩形
    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < m; j++) {
            for (let z = 0; z < n; z++) {
                if (students[i][z] === mentors[j][z]) arr[i][j]++
            }
        }
    }
    
    function dfs(row, sum, idx){
        if(row == m){
            ans = Math.max(ans, sum);
            return
        }
        for(let i = 0; i < m; i ++){
            if(idx.includes(i))continue
            idx.push(i)
            sum += arr[row][i];
            dfs(row + 1, sum, idx);
            idx.pop();
            sum -= arr[row][i];
        }
    }
    dfs(0, 0, [])
    
    return ans
};