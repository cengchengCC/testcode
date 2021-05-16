//Backtracking
var permutation = function(s){
	const res = new Set();
	const visit = {};
	function dfs(path){
		if(path.length === s.length)return res.add(path)
		for(let i = 0; i < s.length; i ++){
			if(visit[i])continue
			visit[i] = true;
			dfs(path + s[i])
			visit[i] = false	
		}
	}
	dfs("")
	return [... res]
}
//https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/solution/javascript-hui-su-fa-by-menteceso/

var permutation = function(s){
	let vis = [];
	let res = [];
	for(let i in s){
		vis[i] = false
	}
	let arr = s.split('');
	s = arr.sort().join('');
	function dfs(vis, cur, s){
		if(cur.length === s.length){
			res.push(cur);
			return;
		}
		for(let i = 0; i < s.length; i++){
			if(!vis[i]){
				if(i > 0 && s[i] ==s[i - 1] && !vis[i -1]){
					continue
				}
				cur += s[i];
				vis[i] = true;
				dfs(vis, cur, s)
				vis[i] = false;
				cur = cur.slice(0, cur.length - 1)
			}
		}
	}
	dfs(vis, '', s)
	return res
}
//https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/solution/jshui-su-by-leanr/
console.log(permutation("abc"))