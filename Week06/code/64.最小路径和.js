/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (65.68%)
 * Likes:    523
 * Dislikes: 0
 * Total Accepted:    101.5K
 * Total Submissions: 153.7K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      if (i != 0 && j != 0) {
        grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j]
      } else if (i == 0 && j != 0) {
        grid[i][j] = grid[i][j - 1] + grid[i][j]
      } else if (i != 0 && j == 0) {
        grid[i][j] = grid[i - 1][j] + grid[i][j]
      } else if (i == 0 && j == 0) {
        continue
      }
    }
  }
  return grid[grid.length - 1][grid[0].length - 1]
};
// @lc code=end

