/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  s = ' ' + s
  t = ' ' + t

  const n = s.length,
    m = t.length

  const dp = [...new Array(m)].map(() => new Array(n))

  for (let j = 0; j < n; j++) {
    dp[0][j] = 1
  }

  for (let i = 1; i < m; i++) {
    dp[i][0] = 0
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (s[j] === t[i]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
  }

  return dp[m - 1][n - 1]
};
// @lc code=end

