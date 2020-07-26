/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 *
 * https://leetcode-cn.com/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (40.14%)
 * Likes:    268
 * Dislikes: 0
 * Total Accepted:    43.8K
 * Total Submissions: 108.5K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
 * 
 * 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
 * 
 * 示例:
 * 
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 * 
 * 
 * 运行你的函数后，矩阵变为：
 * 
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 * 
 * 
 * 解释:
 * 
 * 被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O'
 * 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let m = board.length
  if (m == 0) return
  let n = board[0].length
  let cannot = {}
  let dfs = (i, j) => {
    // 越界、标示过或者非相连O下return
    if (i < 0 || j < 0 || i == m || j == n || board[i][j] != 'O' || cannot[i + '-' + j]) {
      return
    }
    cannot[i + '-' + j] = true
    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((i == 0 || j == 0 || i == m - 1 || j == n - 1) && board[i][j] == 'O') {
        dfs(i, j)
      }
    }
  }

  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (!cannot[i + '-' + j] && board[i][j] == 'O') {
        board[i][j] = 'X'
      }
    }
  }
};
// @lc code=end

