/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length
  if (!m || obstacleGrid[0][0] === 1) return 0  // 空数组 或 开始方块就是障碍的情况
  if (m === 1) return +!obstacleGrid[0].includes(1) // 当只有一行的情况

  let n = obstacleGrid[0].length
  let dp = Array.apply(null, Array(m + 1)).map(() => Array(n + 1).fill(0))  // 生成 (m + 1) * (n + 1) 的数组
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 && j === 1) { // 使dp[1][1] = 1 , dp[1][1] 对应 obstacleGrid[0][0]
        dp[i][j] = 1
      } else if (obstacleGrid[i - 1][j - 1] != 1) { // 当不是障碍物时 dp[当前] = dp[上] + dp[左]
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      } else {  // 当碰到障碍物 说明此路不通  dp[i][j] = 0
        dp[i][j] = 0
      }
    }
  }
  return dp[m][n]
};
// @lc code=end

