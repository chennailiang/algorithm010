/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode-cn.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (30.73%)
 * Likes:    853
 * Dislikes: 0
 * Total Accepted:    87.3K
 * Total Submissions: 262.8K
 * Testcase Example:  '"(()"'
 *
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 * 
 * 示例 1:
 * 
 * 输入: "(()"
 * 输出: 2
 * 解释: 最长有效括号子串为 "()"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ")()())"
 * 输出: 4
 * 解释: 最长有效括号子串为 "()()"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let maxLen = 0
  const len = s.length
  const dp = new Array(len).fill(0)
  for (let i = 1; i < len; i++) {
    if (s[i] == ')') {
      if (s[i - 1] == '(') {
        if (i - 2 >= 0) {
          dp[i] = dp[i - 2] + 2
        } else {
          dp[i] = 2
        }
      } else if (s[i - dp[i - 1] - 1] == '(') {
        if (i - dp[i - 1] - 2 >= 0) {
          dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2]
        } else {
          dp[i] = dp[i - 1] + 2
        }
      }
    }
    maxLen = Math.max(maxLen, dp[i])
  }
  return maxLen
};
// @lc code=end

