/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 *
 * https://leetcode-cn.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (67.42%)
 * Likes:    328
 * Dislikes: 0
 * Total Accepted:    25.9K
 * Total Submissions: 38K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 
 * 
 * 上图为 8 皇后问题的一种解法。
 * 
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 * 
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 
 * 示例:
 * 
 * 输入: 4
 * 输出: [
 * ⁠[".Q..",  // 解法 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 * 
 * ⁠["..Q.",  // 解法 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * 解释: 4 皇后问题存在两个不同的解法。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {

  // 1. 行不能一样 按照行查找

  // 2. 列不能一样

  // 3. 行-列（索引值）不能一样

  // 4. 行+列（索引值）不能一样

  // tmp 用于记录之前的路径
  // tmp：当行索引为n时，摆放的棋子列的索引值
  // [1,3,0,2]
  //  比如行索引是0时，摆放列索引是1
  //  比如行索引是1时，摆放列索引是3
  let ret = []
  // 查找第0行
  find(0)
  return ret
  function find(row, tmp = []) {
    // 终止条件
    if (row === n) {
      // n-1 已经是最后一行了 tmp是所有拜访的位置
      ret.push(tmp.map(c => {
        let arr = new Array(n).fill('.')
        arr[c] = 'Q'
        return arr.join('')
      }))
    }
    // 查找
    for (let col = 0; col < n; col++) {
      // 是否无法放置
      let canNotSet = tmp.some((colIndex, rowIndex) => {
        // colIndex和rowIndex是之前摆放棋子的行列索引
        // col和row是当前所在位置的索引
        return colIndex === col ||
          (rowIndex - colIndex) === (row - col) ||
          (rowIndex + colIndex) === (row + col)
      })
      if (canNotSet) {
        continue
      }
      // 如果能放置，直接查找下一行
      find(row + 1, [...tmp, col])
    }
  }

};
// @lc code=end

