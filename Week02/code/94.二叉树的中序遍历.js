/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (69.62%)
 * Likes:    378
 * Dislikes: 0
 * Total Accepted:    97.4K
 * Total Submissions: 139.4K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 * 
 * 输出: [1,3,2]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root, arr = []) {
  // // 递归
  // if (root) {
  //   inorderTraversal(root.left, arr)
  //   arr.push(root.val)
  //   inorderTraversal(root.right, arr)
  // }
  // return arr

  // 迭代
  let result = []
  let stack = []
  let curr = root
  while (curr || stack.length > 0) {
    if (curr) {
      stack.push(curr); // 节点入栈，通过curr寻找右子树
      curr = curr.left;
    } else {
      curr = stack.pop();
      result.push(curr.val);
      curr = curr.right;
    }
  }
  return result

};
// @lc code=end

