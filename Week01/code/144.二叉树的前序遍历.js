/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (63.48%)
 * Likes:    196
 * Dislikes: 0
 * Total Accepted:    62.9K
 * Total Submissions: 98.8K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
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
 * 输出: [1,2,3]
 * 
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
var preorderTraversal = function (root, arr = []) {
  // // 递归
  // if (root) {
  //   arr.push(root.val)
  //   preorderTraversal(root.left, arr)
  //   preorderTraversal(root.right, arr)
  // }
  // return arr

  // 迭代
  let result = []
  let stack = []
  let curr = root
  while(curr || stack.length > 0){
    while(curr){
      result.push(curr.val)
      stack.push(curr) // 节点入栈，通过curr寻找右子树
      curr = curr.left
    }
    curr = stack.pop()
    curr = curr.right
  }
  return result
};
// @lc code=end

