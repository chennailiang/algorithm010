/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 *
 * https://leetcode-cn.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (58.68%)
 * Likes:    331
 * Dislikes: 0
 * Total Accepted:    19.8K
 * Total Submissions: 33.2K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * 编写一个程序，通过已填充的空格来解决数独问题。
 * 
 * 一个数独的解法需遵循如下规则：
 * 
 * 
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * 
 * 
 * 空白格用 '.' 表示。
 * 
 * 
 * 
 * 一个数独。
 * 
 * 
 * 
 * 答案被标成红色。
 * 
 * Note:
 * 
 * 
 * 给定的数独序列只包含数字 1-9 和字符 '.' 。
 * 你可以假设给定的数独只有唯一解。
 * 给定数独永远是 9x9 形式的。
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // 遍历
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != '.') continue
      // 尝试放置数字 1-9
      for (let k = 1; k < 10; k++) {
        if (isValid(board, i, j, k.toString())) {
          // 能放
          board[i][j] = k.toString()
          if (solveSudoku(board)) return true
          // 回溯
          board[i][j] = '.'
        }
      }
      return false
    }
  }
  return true
};

// 判定数字是否可以放置
function isValid(board, row, col, k) {
  const x = Math.floor(row / 3) * 3
  const y = Math.floor(col / 3) * 3
  for (let i = 0; i < 9; i++) {
    // 当前行和列
    if (board[row][i] === k || board[i][col] === k) {
      return false
    }
  }
  // 方块内
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[x + i][y + j] === k) {
        return false
      }
    }
  }
  return true
}
// @lc code=end

