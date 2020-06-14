/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (69.61%)
 * Likes:    217
 * Dislikes: 0
 * Total Accepted:    47.5K
 * Total Submissions: 68K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
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
 * 输出: [3,2,1]
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
var postorderTraversal = function (root, arr = []) {
  // // 递归
  // if (root) {
  //   postorderTraversal(root.left, arr)
  //   postorderTraversal(root.right, arr)
  //   arr.push(root.val)
  // }
  // return arr

  // 迭代
  const result = [];
  const stack = [];
  let last = null; // 标记上一个访问的节点
  let curr = root;
  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack[stack.length - 1];
    if (!curr.right || curr.right == last) {
      curr = stack.pop();
      result.push(curr.val);
      last = curr;
      curr = null; // 继续弹栈
    } else {
      curr = curr.right;
    }
  }
  return result;

};
// @lc code=end

