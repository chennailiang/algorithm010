/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 *
 * https://leetcode-cn.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (49.56%)
 * Likes:    640
 * Dislikes: 0
 * Total Accepted:    124K
 * Total Submissions: 249.5K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
 * 
 * 此外，你可以假设该网格的四条边均被水包围。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * [
 * ['1','1','1','1','0'],
 * ['1','1','0','1','0'],
 * ['1','1','0','0','0'],
 * ['0','0','0','0','0']
 * ]
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * [
 * ['1','1','0','0','0'],
 * ['1','1','0','0','0'],
 * ['0','0','1','0','0'],
 * ['0','0','0','1','1']
 * ]
 * 输出: 3
 * 解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // dfs
  function dfsmarking(grid, i, j) {
    if (i < 0 ||
      j < 0 ||
      i >= n ||
      j >= m ||
      grid[i][j] !== '1') return
    grid[i][j] = '0'
    dfsmarking(grid, i + 1, j)
    dfsmarking(grid, i - 1, j)
    dfsmarking(grid, i, j + 1)
    dfsmarking(grid, i, j - 1)
  }
  let sum = 0
  let n = grid.length
  if (n === 0) return 0
  m = grid[0].length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '1') {
        dfsmarking(grid, i, j)
        sum++
      }
    }
  }
  return sum
};
// @lc code=end

