/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
	if(preorder.length == 0)return null;
	const cur = new TreeNode(preorder[0]);
	const index = inorder.indexOf(preorder[0])
	cur.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
	cur.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
	return cur
};

//https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/solution/jian-zhi-offer-07-zhong-jian-er-cha-shu-qx9pj/
var buildTree = function(preorder, inorder) {
    const helper = (p_start, p_end, i_start, i_end) =>{
        if(p_start > p_end)return null;
        let root = new TreeNode(preorder[p_start]);
        let mid = inorder.indexOf(preorder[p_start], i_start);
        let leftNum = mid - i_start;
        root.left = helper(p_start + 1, p_start + leftNum, i_start, mid - 1);
        root.right = helper(p_start + leftNum + 1, p_end, mid + 1, i_end);
        return root;
    }
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

var buildTree = function(preorder, inorder) {
    if(preorder.length==0) return null;
    let n = preorder.length;

    function constructNode(curpos, st, end){ //end不包含
        if(st>=end) return null;
        let node;
        let i;
        for(i=st; i<end; i++){
            if(preorder[curpos] == inorder[i]){
                node = new TreeNode(preorder[curpos]);
                // console.log("node: "+node.val);
                break;
            }
        }
        node.left = constructNode(curpos+1, st,i) ;
        node.right = constructNode(curpos+i-st+1, i+1,end) ;
        // console.log(node.val);
        return node;
    }

    let root = constructNode(0, 0, n);
    // console.log(root.val);
    return root;
};