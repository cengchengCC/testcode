/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
	if(!matrix.length || !matrix[0].length)return [];

	const rows = matrix.length, columns = matrix[0].length;
	const visited = new Array(rows).fill(0).map(d => new Array(columns).fill(false));
	const total = rows * columns;
	const order = new Array(total).fill(0);

	let directionIndex = 0, row = 0, column = 0;
	const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

	for(let i = 0; i < total; i++){
		order[i] = matrix[row][column];
		visited[row][column] = true;
		const nextRow = row + directions[directionIndex][0], nextColumn = column + directions[directionIndex][1];
		if(!(0 <= nextRow && nextRow < rows && 0 <= nextColumn && nextColumn < columns && !(visited[nextRow][nextColumn]))){
			directionIndex = (directionIndex + 1) % 4;
		}
		row += directions[directionIndex][0];
		column += directions[directionIndex][1];
	}
	return order;
};
// https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/solution/shun-shi-zhen-da-yin-ju-zhen-by-leetcode-solution/
// 时间复杂度：O(mn)，其中 m 和 n分别是输入矩阵的行数和列数。矩阵中的每个元素都要被访问一次。

// 空间复杂度：O(mn)。需要创建一个大小为 m×n 的矩阵visited记录每个位置是否被访问过。

var spiralOrder = function(matrix) {
	if(!matrix.length || !matrix[0].length)return [];

	const rows = matrix.length, columns = matrix[0].length;
	const order = [];
	let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
	while(left <= right && top <= bottom){
		for(let column = left; column <= right; column++){
			order.push(matrix[top][column])
		}
		for(let row = top + 1; row <= bottom; row++){
			order.push(matrix[row][right])
		}
		if(left < right && top < bottom){
			for(let column = right - 1;column > left; column--){
				order.push(matrix[bottom][column])
			}
			for(let row = bottom;row > top; row--){
				order.push(matrix[row][left])
			}
		}
		[left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
	}
	return order;
};