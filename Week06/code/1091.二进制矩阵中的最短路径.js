/*
 * @lc app=leetcode.cn id=1091 lang=javascript
 *
 * [1091] 二进制矩阵中的最短路径
 *
 * https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/description/
 *
 * algorithms
 * Medium (33.10%)
 * Likes:    47
 * Dislikes: 0
 * Total Accepted:    9.2K
 * Total Submissions: 27.1K
 * Testcase Example:  '[[0,1],[1,0]]'
 *
 * 在一个 N × N 的方形网格中，每个单元格有两种状态：空（0）或者阻塞（1）。
 * 
 * 一条从左上角到右下角、长度为 k 的畅通路径，由满足下述条件的单元格 C_1, C_2, ..., C_k 组成：
 * 
 * 
 * 相邻单元格 C_i 和 C_{i+1} 在八个方向之一上连通（此时，C_i 和 C_{i+1} 不同且共享边或角）
 * C_1 位于 (0, 0)（即，值为 grid[0][0]）
 * C_k 位于 (N-1, N-1)（即，值为 grid[N-1][N-1]）
 * 如果 C_i 位于 (r, c)，则 grid[r][c] 为空（即，grid[r][c] == 0）
 * 
 * 
 * 返回这条从左上角到右下角的最短畅通路径的长度。如果不存在这样的路径，返回 -1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[[0,1],[1,0]]
 * 
 * 输出：2
 * 
 * 
 * 
 * 示例 2：
 * 
 * 输入：[[0,0,0],[1,1,0],[1,1,0]]
 * 
 * 输出：4
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= grid.length == grid[0].length <= 100
 * grid[i][j] 为 0 或 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0]) return -1
  const row = grid.length - 1, col = grid[0].length - 1
  if (grid[row][col]) return -1
  const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
  const queue = [[0, 0]]
  grid[0][0] = 1
  let res = 0, i = queue.length, newX, newY, temp, x, y
  while (i) {
    res++;
    while (i--) {
      temp = queue.shift()
      if (temp[0] === row && temp[1] === col) return res
      dirs.forEach(dir => {
        newX = temp[0] + dir[0]
        newY = temp[1] + dir[1]
        if (newX < 0 || newX > row || newY < 0 || newY > col || grid[newX][newY]) return
        queue.push([newX, newY])
        grid[newX][newY] = 1
      })
    }
    i = queue.length
  }
  return -1
};
// @lc code=end

