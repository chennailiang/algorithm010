/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (75.55%)
 * Likes:    1109
 * Dislikes: 0
 * Total Accepted:    138.8K
 * Total Submissions: 183.7K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：n = 3
 * 输出：[
 * ⁠      "((()))",
 * ⁠      "(()())",
 * ⁠      "(())()",
 * ⁠      "()(())",
 * ⁠      "()()()"
 * ⁠    ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = []
  let dfs = (s, left, right) => {
    if (left == n && right == n) return res.push(s)
    if (left < n) dfs(s + '(', left + 1, right)
    if (right < left) dfs(s + ')', left, right + 1)
  }
  dfs('', 0, 0)
  return res
};
// @lc code=end

