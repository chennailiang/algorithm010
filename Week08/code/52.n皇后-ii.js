/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 *
 * https://leetcode-cn.com/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (78.54%)
 * Likes:    137
 * Dislikes: 0
 * Total Accepted:    28.4K
 * Total Submissions: 35.9K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 
 * 
 * 上图为 8 皇后问题的一种解法。
 * 
 * 给定一个整数 n，返回 n 皇后不同的解决方案的数量。
 * 
 * 示例:
 * 
 * 输入: 4
 * 输出: 2
 * 解释: 4 皇后问题存在如下两个不同的解法。
 * [
 * [".Q..",  // 解法 1
 * "...Q",
 * "Q...",
 * "..Q."],
 * 
 * ["..Q.",  // 解法 2
 * "Q...",
 * "...Q",
 * ".Q.."]
 * ]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 皇后，是国际象棋中的棋子，意味着国王的妻子。皇后只做一件事，那就是“吃子”。当她遇见可以吃的棋子时，就迅速冲上去吃掉棋子。当然，她横、竖、斜都可走一或
 * N-1 步，可进可退。（引用自 百度百科 - 皇后 ）
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let res = 0
  const dfs = (n, row, cols, pie, na) => {
    if (row >= n) {
      res++
      return
    }
    // 得到当前所有的空位
    let bits = (~(cols | pie | na)) & ((1 << n) - 1)
    while (bits) {
      // 取最低位的1
      let p = bits & -bits
      // 把P位置上放入皇后
      bits = bits & (bits - 1)
      dfs(n, row + 1, cols | p, (pie | p) << 1, (na | p) >> 1)
    }
  }
  dfs(n, 0, 0, 0, 0)
  return res;
};
// @lc code=end

