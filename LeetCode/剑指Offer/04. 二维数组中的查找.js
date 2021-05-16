/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
	let len = matrix.length;
    if(len === 0)return false;

    function dfs(i, j){
    	if(j > matrix[0].length - 1 || i < 0)return false;
    	if(matrix[i][j] === target){
    		return true;
    	}else if(matrix[i][j] > target){
    		return dfs(i-1, j)
    	}else{
    		return dfs(i, j+1)
    	}
    }
    return dfs(len - 1, 0)
};

// O(m+n)