/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (73.24%)
 * Likes:    82
 * Dislikes: 0
 * Total Accepted:    30.3K
 * Total Submissions: 41.3K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 N 叉树，返回其节点值的前序遍历。
 * 
 * 例如，给定一个 3叉树 :
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 返回其前序遍历: [1,3,5,6,2,4]。
 * 
 * 
 * 
 * 说明: 递归法很简单，你可以使用迭代法完成此题吗?
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  // 递归
  // if (!root) return [];
  // const res = [];
  // const recusion = root => {
  //   if (!root) return;
  //   res.push(root.val);
  //   for (let i = 0; i < root.children.length; i++) {
  //     recusion(root.children[i]);
  //   }
  // }
  // recusion(root);
  // return res;

  // 迭代
  let result = []
  let current = root;
  while (current) {
    result.push(current.val);
    let tmp = current.children;
    if (!tmp.length) return result;
    current = current.children.shift();
    let next = current;
    while (next.children.length) {
      next = next.children[next.children.length - 1];
    }
    next.children = tmp;
  }
  return result;
}
// @lc code=end

