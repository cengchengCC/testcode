var movingCount = function(m, n, k) {
	let total = 0,
		obj = {};
	function running(i, j){
		if(i < 0 || j < 0 || i >= m || j >= n)return
		let sum = (i + "" + j).split('').reduce((a, b) => +a + +b),
			axis = [i, j].toString();
		if(sum <= k && !obj[axis]){
			total++;
			obj[axis] = true;

			running(i + 1, j);
			running(i, j + 1);
		}
	}
	running(0, 0);
	return total
};
// https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/solution/da-lao-jiu-shi-da-lao-zi-ji-xiang-po-nao-dai-du-xi/


var movingCount = function(m, n, k) {
	let visited = new Array(m);
	for(let i = 0;i < m; i++){
		visited[i] = new Array(n).fill(false)
	}
	let dfs = function(i, j, si, sj){
		if(i >= m || j >= n || visited[i][j] || si + sj > k)return 0;
		visited[i][j] = true;
		return 1 + dfs(i + 1, j, (i + 1)% 10 !== 0 ? si + 1 : si - 8, sj ) + dfs(i, j + 1, si, (j + 1)% 10 !== 0 ? sj + 1 : sj - 8 )
	}
	return dfs(0, 0, 0, 0)
};

console.log(movingCount(2, 3, 1))