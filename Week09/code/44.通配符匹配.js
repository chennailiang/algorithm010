/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const sLen = s.length
  const pLen = p.length
  // 初始化（包括了一部分base case）
  const dp = new Array(sLen + 1);
  for (let i = 0; i < sLen + 1; i++) {
    dp[i] = new Array(pLen + 1).fill(false)
  }
  // base case
  dp[0][0] = true;
  for (let j = 1; j <= pLen; j++) {
    dp[0][j] = p[j - 1] == '*' && dp[0][j - 1]
  }
  // 迭代
  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= pLen; j++) {
      if (p[j - 1] == '?' || s[i - 1] == p[j - 1])
        dp[i][j] = dp[i - 1][j - 1]
      else if (p[j - 1] == '*' && (dp[i - 1][j] || dp[i][j - 1]))
        dp[i][j] = true
    }
  }
  return dp[sLen][pLen] // 整个s串和整个p串是否匹配

};
// @lc code=end

