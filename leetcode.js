// console.log(new Array(5).fill(0))

// var numWays = function(n) {
//      if (n===0|n===1)return 1
//     round=new Array(n).fill(0)
//     round[n-1]=1;
//     while(n>2){
//         round[n-2]+=round[n-1];
//         round[n-3]+=round[n-1];
//         n--;
//     }
//     return round[1]+round[2]*2
// };



//257
// var binaryTreePaths=(root)=>{
// 	const paths=[]
// 	const querry_path=(root,path)=>{
// 		if(root){
// 			path+=root.val.toString()
// 			if(root.left===null&&root.right===null){
// 				paths.push(path);
// 			}else{
// 				path+="->";
// 				querry_path(root.left,path)
// 				querry_path(root.right,path)
// 			}
// 		}
// 	}
// 	querry_path(root,"")
// 	return paths
// }

//深度优先搜索


//广度优先搜索
// var binaryTreePaths = function(root) {
//     const paths = [];
//     if(root===null)return paths
//    	const node_queue=[root]
//    	const path_queue=[root.val.toString()]

//    	while(node_queue.length){
//    		const node=node_queue.shift()
//    		const path=path_queue.shift()
//    		if(node)
//    	}
// };


// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/binary-tree-paths/solution/er-cha-shu-de-suo-you-lu-jing-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


//37. 解数独
// Sudokuexample=[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

// const solveSudoku=(board)=>{
// 	const hasConflict=(r,c,val)=>{
// 		for (let i=0;i<9;i++){
// 			if(board[i][c]===val||board[r][i]===val){
// 				return true
// 			}
// 		}
// 		const subRowStart=Math.floor(r/3)*3;
// 		const subColStart=Math.floor(c/3)*3;
// 		for (let i=0;i<3;i++){
// 			for (let j=0;j<3;j++){
// 				if(val===board[subRowStart+i][subColStart+j]){
// 					return true
// 				}
// 			}
// 		}
// 		return false;
// 	}
// 	const fill=(i,j)=>{
// 		if(j===9){
// 			i++;
// 			j=0
// 			if(i===9)return true;
// 		}
// 	if(board[i][j]!=".") return fill(i,j+1);

// 	for(let num=1;num<=9;num++){
// 		if(hasConflict(i,j,String(num)))continue;
// 		board[i][j]=String(num);
// 		if(fill(i,j+1)) return true;
// 		board[i][j]="."
// 	}
// 	return false
// 	}
// 	fill(0,0)
// 	return board;
// }

// const solveSudoku = (board) => {
//   const rows = new Array(9);    // 存放每一行对应的可选数集
//   const cols = new Array(9);    // 存放每一列对应的可选数集
//   const blocks = new Array(9);  // 存放每一框对应的可选数集
//   const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; 
//   for (let i = 0; i < 9; i++) { // 集合的初始化
//     rows[i] = new Set(options);
//     cols[i] = new Set(options);
//     blocks[i] = new Set(options);
//   }

//   const getBlockIndex = (i, j) => { // 根据坐标，获取所在的小框的索引
//     return (i / 3 | 0) * 3 + j / 3 | 0;  // |0 是向下取整
//   };

//   for (let i = 0; i < 9; i++) {    // 根据现有的已填的数字，更新set们
//     for (let j = 0; j < 9; j++) {
//       if (board[i][j] != ".") {
//         rows[i].delete(board[i][j]); // 当前行出现过这个数字，这个数字就不能在这一行出现，删除该选项
//         cols[j].delete(board[i][j]);
//         blocks[getBlockIndex(i, j)].delete(board[i][j]);
//       }
//     }
//   }

//   const fill = (i, j) => {
//     if (j == 9) {     // 列越界，就填下一行
//       i++;
//       j = 0;
//       if (i == 9) return true;  // 都填完了 返回true
//     }
//     if (board[i][j] != ".") return fill(i, j + 1); // 如果不是空白格，递归填下一格

//     const blockIndex = getBlockIndex(i, j); // 获取所在小框的索引

//     for (let num = 1; num <= 9; num++) {    // 枚举出所有选择：1-9
//       const s = String(num);
//       // 当前选择必须在三个set中都存在，如果有一个不存在，就说明发生了冲突，跳过该选择
//       if (!rows[i].has(s) || !cols[j].has(s) || !blocks[blockIndex].has(s)) continue;

//       board[i][j] = s;    // 作出选择
//       rows[i].delete(s);  // 更新set们，删掉这个可填选项
//       cols[j].delete(s);
//       blocks[blockIndex].delete(s);

//       if (fill(i, j + 1)) return true; // 如果基于当前选择，填下一个，最后可解出数独，直接返回真
//       // 基于当前选择，填下一个，怎么填都不行，回溯，恢复为空白格
//       board[i][j] = ".";
//       rows[i].add(s);     // set们，将之前删掉的当前数字，加回来
//       cols[j].add(s);
//       blocks[blockIndex].add(s);
//     }
//     return false;  // 尝试了1-9，每个都往下递归，都不能做完，返回false
//   };

//   fill(0, 0);  // 填格子的起点
//   return board;
// };


// 作者：xiao_ben_zhu
// 链接：https://leetcode-cn.com/problems/sudoku-solver/solution/shou-hua-tu-jie-jie-shu-du-hui-su-suan-fa-sudoku-s/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var solveSudoku = function (board) {
//     new Sudoku(board).solve();
// };

// class Sudoku {
//     constructor(board) {
//         this.board = board;
//         //行
//         this.rows = new Array(9).fill(0);
//         //列
//         this.columns = new Array(9).fill(0);
//         //3x3方格
//         this.boxs = Array.from({ length: 3 }, () => new Array(3).fill(0));
//         //未填空格
//         this.emptyCells = new Set();
//     }
//     solve() {
//         //初始化已知的数字
//         for (let i = 0; i < 9; i++) {
//             for (let j = 0; j < 9; j++) {
//                 let num = this.board[i][j];
//                 if (num !== ".") {
//                     //将数字转化为二进制标记
//                     //1 -> 0b1, 2 -> 0b10, 3 -> 0b100, 4 -> 0b1000 ...
//                     const sign = 1 << (Number(num) - 1);
//                     this.rows[i] |= sign;
//                     this.columns[j] |= sign;
//                     this.boxs[Math.floor(i / 3)][Math.floor(j / 3)] |= sign;
//                 } else {
//                     this.emptyCells.add((i << 4) | j);
//                 }
//             }
//         }
//         //主逻辑
//         return this.fillNext();
//     }
//     fillNext() {
//         let cellInfo = this.getEmptyCell();
//         if (cellInfo === null) {
//             //没有空格，解题成功
//             return true;
//         }
//         let [i, j, possible] = cellInfo;
//         while (possible) {
//             //截取其中一个可能性
//             const sign = ((possible - 1) & possible) ^ possible;
//             //更新约束关系
//             this.fillCell(i, j, sign);
//             //继续下一个填充
//             if (this.fillNext()) {
//                 //填充成功
//                 return true;
//             } else {
//                 //排除当前数字
//                 possible ^= sign;
//                 //清除约束关系
//                 this.cleanCell(i, j, sign);
//             }
//         }
//         //穷尽所有可能性，回溯
//         return false;
//     }
//     getEmptyCell() {
//         let min = 10;
//         let cellInfo = null;
//         for (const id of this.emptyCells) {
//             const i = id >> 4, j = id & 0b1111;
//             const possible = this.getCellPossible(i, j);
//             const count = this.countPossible(possible);
//             if (min > count) {
//                 //挑选可能性最少的格子，理论上可减少犯错回溯
//                 cellInfo = [i, j, possible];
//                 min = count;
//             }
//         }
//         return cellInfo;
//     }
//     countPossible(possible) {
//         //计算二进制 1 的数量
//         let count = 0;
//         while (possible) {
//             possible &= (possible - 1);
//             count++;
//         }
//         return count;
//     }
//     fillCell(i, j, sign) {
//         //对应位变成1，标记占用
//         this.rows[i] |= sign;
//         this.columns[j] |= sign;
//         this.boxs[Math.floor(i / 3)][Math.floor(j / 3)] |= sign;
//         //填入空格
//         this.emptyCells.delete((i << 4) | j);
//         this.board[i][j] = String(Math.log2(sign) + 1);
//     }
//     cleanCell(i, j, sign) {
//         //对应位变为0，清除占用
//         this.rows[i] &= ~sign;
//         this.columns[j] &= ~sign;
//         this.boxs[Math.floor(i / 3)][Math.floor(j / 3)] &= ~sign;
//         //清空格子
//         this.emptyCells.add((i << 4) | j)
//         this.board[i][j] = ".";
//     }
//     getCellPossible(i, j) {
//         //获取格子可能的取值，二进制1表示可选
//         return (this.rows[i] | this.columns[j] | this.boxs[Math.floor(i / 3)][Math.floor(j / 3)]) ^ 0b111111111;
//     }
// }
// console.log(solveSudoku(Sudoku))



//226. 翻转二叉树


// var invertTree=(root)=>{
// 	let queue=[root]
// 	while(queue.length){
// 		let cur =queue.shift()
// 		if(cur){
// 			[cur.left,cur.right]=[cur.right,cur.left]
// 			queue.push(cur.left)
// 			queue.push(cur.right)
// 		}
// 	}
// 	return root
// }


//463. 岛屿的周长
input=[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]

// var islandPerimeter = function(grid) {
//     const ans=0
//     const dx=[0,1,0,-1];
//     const dy=[1,0,-1,0];
//     const m=grid.length,n=grid[0].length; 
//     for (let i = 0; i < n; ++i) {
//         for (var j= 0;j< m; ++j) {
//             if(grid[i][j]){
//                 let cnt=0;
//                 for(let k=0;k<4;++k){
//                     let tx=i+dx[k];
//                     let ty=j+dy[k];
//                     if(tx<0||tx>=n||ty<0||ty>=m||!grid[tx][ty]){
//                       cnt+=1
//                     }
//                 }
//                 ans+=cnt;                 
//             }
//         }
//   }
//   return ans
// };
// // 链接：https://leetcode-cn.com/problems/island-perimeter/solution/dao-yu-de-zhou-chang-by-leetcode-solution/

console.log(islandPerimeter([[1,0]]))


//LCP01 早餐组合


// var breakfastNumber = function(staple, drinks, x) {
//     function cmp (v1, v2){
//         if (v1 > v2) return 1;
//         else if (v1 < v2) return -1;
//         else return 0;
//     }
//     let ans = 0;
//     let last = drinks.length - 1;
//     staple.sort(cmp);
//     drinks.sort(cmp);
    
//     for (var food of staple) {
//         if (food > x) break;
//         if (food + drinks[last] <= x) ans += (last + 1); 
//         else {
//             while (last > 0) {
//               last--;
//               if (food + drinks[last] <= x) {
//                   ans += (last + 1);
//                   break;
//               }
//             }
//         }
//         if (last < 0) break;
//     }
    
    
//     return ans % 1000000007;
// };

// var lengthLongestPath = function(input) {

//     let res=[];
//     const arr=res.split('\n');
//     const stack=[];
//     for (let str of arr){
//         let chars=str.split('\t');
//         if(!stack.length){
//             stack.push([chars[chars.length-1],chars.length])
//         }else{
//             let depth=stack[stack.length-1][1]
//             if(chars.length<=depth){
//                 for(let i =chars.length;i<=length;i++){
//                     stack.pop()
//                 }
//                 stack.push([chars[chars.length-1]])
//             }
//         }
//     }
// };



// 925. 长按键入  Two Pointers

var isLongPressedName=function(name,typed){
	// if(name.legth&)
	i=0;
	for(j=0;j<typed.length;j++){
		if(typed[j]===name[i]){
			j++
			i++
		}else if(typed[j]===name[i-1]){
			j++
		}
	}
	if(i===name.length){
		return true
	}else{
		return false
	}
}


typed="leelee"
console.log(typed.length)
// console.log(new Array(5).fill(0))

// var numWays = function(n) {
//      if (n===0|n===1)return 1
//     round=new Array(n).fill(0)
//     round[n-1]=1;
//     while(n>2){
//         round[n-2]+=round[n-1];
//         round[n-3]+=round[n-1];
//         n--;
//     }
//     return round[1]+round[2]*2
// };



//257
// var binaryTreePaths=(root)=>{
// 	const paths=[]
// 	const querry_path=(root,path)=>{
// 		if(root){
// 			path+=root.val.toString()
// 			if(root.left===null&&root.right===null){
// 				paths.push(path);
// 			}else{
// 				path+="->";
// 				querry_path(root.left,path)
// 				querry_path(root.right,path)
// 			}
// 		}
// 	}
// 	querry_path(root,"")
// 	return paths
// }

//深度优先搜索


//广度优先搜索
// var binaryTreePaths = function(root) {
//     const paths = [];
//     if(root===null)return paths
//    	const node_queue=[root]
//    	const path_queue=[root.val.toString()]

//    	while(node_queue.length){
//    		const node=node_queue.shift()
//    		const path=path_queue.shift()
//    		if(node)
//    	}
// };


// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/binary-tree-paths/solution/er-cha-shu-de-suo-you-lu-jing-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


//37. 解数独
Sudokuexample=[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

// const solveSudoku=(board)=>{
// 	const hasConflict=(r,c,val)=>{
// 		for (let i=0;i<9;i++){
// 			if(board[i][c]===val||board[r][i]===val){
// 				return true
// 			}
// 		}
// 		const subRowStart=Math.floor(r/3)*3;
// 		const subColStart=Math.floor(c/3)*3;
// 		for (let i=0;i<3;i++){
// 			for (let j=0;j<3;j++){
// 				if(val===board[subRowStart+i][subColStart+j]){
// 					return true
// 				}
// 			}
// 		}
// 		return false;
// 	}
// 	const fill=(i,j)=>{
// 		if(j===9){
// 			i++;
// 			j=0
// 			if(i===9)return true;
// 		}
// 	if(board[i][j]!=".") return fill(i,j+1);

// 	for(let num=1;num<=9;num++){
// 		if(hasConflict(i,j,String(num)))continue;
// 		board[i][j]=String(num);
// 		if(fill(i,j+1)) return true;
// 		board[i][j]="."
// 	}
// 	return false
// 	}
// 	fill(0,0)
// 	return board;
// }

const solveSudoku = (board) => {
  const rows = new Array(9);    // 存放每一行对应的可选数集
  const cols = new Array(9);    // 存放每一列对应的可选数集
  const blocks = new Array(9);  // 存放每一框对应的可选数集
  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; 
  for (let i = 0; i < 9; i++) { // 集合的初始化
    rows[i] = new Set(options);
    cols[i] = new Set(options);
    blocks[i] = new Set(options);
  }

  const getBlockIndex = (i, j) => { // 根据坐标，获取所在的小框的索引
    return (i / 3 | 0) * 3 + j / 3 | 0;  // |0 是向下取整
  };

  for (let i = 0; i < 9; i++) {    // 根据现有的已填的数字，更新set们
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != ".") {
        rows[i].delete(board[i][j]); // 当前行出现过这个数字，这个数字就不能在这一行出现，删除该选项
        cols[j].delete(board[i][j]);
        blocks[getBlockIndex(i, j)].delete(board[i][j]);
      }
    }
  }

  const fill = (i, j) => {
    if (j == 9) {     // 列越界，就填下一行
      i++;
      j = 0;
      if (i == 9) return true;  // 都填完了 返回true
    }
    if (board[i][j] != ".") return fill(i, j + 1); // 如果不是空白格，递归填下一格

    const blockIndex = getBlockIndex(i, j); // 获取所在小框的索引

    for (let num = 1; num <= 9; num++) {    // 枚举出所有选择：1-9
      const s = String(num);
      // 当前选择必须在三个set中都存在，如果有一个不存在，就说明发生了冲突，跳过该选择
      if (!rows[i].has(s) || !cols[j].has(s) || !blocks[blockIndex].has(s)) continue;

      board[i][j] = s;    // 作出选择
      rows[i].delete(s);  // 更新set们，删掉这个可填选项
      cols[j].delete(s);
      blocks[blockIndex].delete(s);

      if (fill(i, j + 1)) return true; // 如果基于当前选择，填下一个，最后可解出数独，直接返回真
      // 基于当前选择，填下一个，怎么填都不行，回溯，恢复为空白格
      board[i][j] = ".";
      rows[i].add(s);     // set们，将之前删掉的当前数字，加回来
      cols[j].add(s);
      blocks[blockIndex].add(s);
    }
    return false;  // 尝试了1-9，每个都往下递归，都不能做完，返回false
  };

  fill(0, 0);  // 填格子的起点
  return board;
};


// 作者：xiao_ben_zhu
// 链接：https://leetcode-cn.com/problems/sudoku-solver/solution/shou-hua-tu-jie-jie-shu-du-hui-su-suan-fa-sudoku-s/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var solveSudoku = function (board) {
//     new Sudoku(board).solve();
// };

// class Sudoku {
//     constructor(board) {
//         this.board = board;
//         //行
//         this.rows = new Array(9).fill(0);
//         //列
//         this.columns = new Array(9).fill(0);
//         //3x3方格
//         this.boxs = Array.from({ length: 3 }, () => new Array(3).fill(0));
//         //未填空格
//         this.emptyCells = new Set();
//     }
//     solve() {
//         //初始化已知的数字
//         for (let i = 0; i < 9; i++) {
//             for (let j = 0; j < 9; j++) {
//                 let num = this.board[i][j];
//                 if (num !== ".") {
//                     //将数字转化为二进制标记
//                     //1 -> 0b1, 2 -> 0b10, 3 -> 0b100, 4 -> 0b1000 ...
//                     const sign = 1 << (Number(num) - 1);
//                     this.rows[i] |= sign;
//                     this.columns[j] |= sign;
//                     this.boxs[Math.floor(i / 3)][Math.floor(j / 3)] |= sign;
//                 } else {
//                     this.emptyCells.add((i << 4) | j);
//                 }
//             }
//         }
//         //主逻辑
//         return this.fillNext();
//     }
//     fillNext() {
//         let cellInfo = this.getEmptyCell();
//         if (cellInfo === null) {
//             //没有空格，解题成功
//             return true;
//         }
//         let [i, j, possible] = cellInfo;
//         while (possible) {
//             //截取其中一个可能性
//             const sign = ((possible - 1) & possible) ^ possible;
//             //更新约束关系
//             this.fillCell(i, j, sign);
//             //继续下一个填充
//             if (this.fillNext()) {
//                 //填充成功
//                 return true;
//             } else {
//                 //排除当前数字
//                 possible ^= sign;
//                 //清除约束关系
//                 this.cleanCell(i, j, sign);
//             }
//         }
//         //穷尽所有可能性，回溯
//         return false;
//     }
//     getEmptyCell() {
//         let min = 10;
//         let cellInfo = null;
//         for (const id of this.emptyCells) {
//             const i = id >> 4, j = id & 0b1111;
//             const possible = this.getCellPossible(i, j);
//             const count = this.countPossible(possible);
//             if (min > count) {
//                 //挑选可能性最少的格子，理论上可减少犯错回溯
//                 cellInfo = [i, j, possible];
//                 min = count;
//             }
//         }
//         return cellInfo;
//     }
//     countPossible(possible) {
//         //计算二进制 1 的数量
//         let count = 0;
//         while (possible) {
//             possible &= (possible - 1);
//             count++;
//         }
//         return count;
//     }
//     fillCell(i, j, sign) {
//         //对应位变成1，标记占用
//         this.rows[i] |= sign;
//         this.columns[j] |= sign;
//         this.boxs[Math.floor(i / 3)][Math.floor(j / 3)] |= sign;
//         //填入空格
//         this.emptyCells.delete((i << 4) | j);
//         this.board[i][j] = String(Math.log2(sign) + 1);
//     }
//     cleanCell(i, j, sign) {
//         //对应位变为0，清除占用
//         this.rows[i] &= ~sign;
//         this.columns[j] &= ~sign;
//         this.boxs[Math.floor(i / 3)][Math.floor(j / 3)] &= ~sign;
//         //清空格子
//         this.emptyCells.add((i << 4) | j)
//         this.board[i][j] = ".";
//     }
//     getCellPossible(i, j) {
//         //获取格子可能的取值，二进制1表示可选
//         return (this.rows[i] | this.columns[j] | this.boxs[Math.floor(i / 3)][Math.floor(j / 3)]) ^ 0b111111111;
//     }
// }
// console.log(solveSudoku(Sudoku))



//226. 翻转二叉树


// var invertTree=(root)=>{
// 	let queue=[root]
// 	while(queue.length){
// 		let cur =queue.shift()
// 		if(cur){
// 			[cur.left,cur.right]=[cur.right,cur.left]
// 			queue.push(cur.left)
// 			queue.push(cur.right)
// 		}
// 	}
// 	return root
// }


//463. 岛屿的周长
input=[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]

var islandPerimeter = function(grid) {
    let ans=0
    const dx=[0,1,0,-1];
    const dy=[1,0,-1,0];
    const m=grid.length - 1,n=grid[0].length -1; 
    for (var i = 0; i < n; i++) {
        for (var j= 0; i < n; j++) {
            if(grid[i][j]){

            }
        }
    }
};
