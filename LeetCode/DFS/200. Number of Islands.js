/**
 * 200. 岛屿数量
 * O(MN)
 * O(MN)
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    if(grid == null || grid.length == 0)return 0;
    const n = grid.length, m = grid[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; 
    const dfs = (i, j) =>{
        if(i < 0 || j < 0 || i >= n || j >= m || grid[i][j] == 0)return;

        grid[i][j] = '0';
        for(let k of directions){
            dfs(i + k[0], j + k[1]);
        }
    }
    let island = 0;
    for(let i = 0; i < n; i ++){
        for(let j = 0; j < m; j ++){
            if(grid[i][j] === '1'){
                island ++;
                dfs(i, j)
            }
        }
    }
    return island
};