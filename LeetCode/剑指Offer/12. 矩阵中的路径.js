/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    if(board.length === 1 && board[0].length === 1 && board[0][0] === word){
        return true;
    }

    let arr = Array.from(new Array(board.length), () => Array(board[0].length).fill(false));

    let isSuccess = false;

    let dir = [[0, 1], [1, 0], [-1, 0], [0, -1]];

    const toBack = (x, y, step) => {
        if(step > word || board[x][y] !== word[step] || isSuccess){
            return false;
        }

        if(step === word.length - 1){
            isSuccess = true;
            return false;
        }

        for(let i = 0; i < dir.length; i ++){
            let x1 = x + dir[i][0],
                y1 = y + dir[i][1];
            if(x1 < board.length && x1 >= 0 &&y1 < board[x].length && y1 >= 0&& !arr[x1][y1]){
                arr[x1][y1] = true;
                toBack(x1, y1, step + 1);
                arr[x1][y1] = false;
            }
        }
    }

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            arr[i][j] = true;
            toBack(i, j, 0);
            arr[i][j] = false;
        }
    }
    return isSuccess;
};
//dfs + 剪枝