/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 *
 * https://leetcode-cn.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (43.38%)
 * Likes:    140
 * Dislikes: 0
 * Total Accepted:    35.4K
 * Total Submissions: 81.7K
 * Testcase Example:  '16'
 *
 * 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
 * 
 * 说明：不要使用任何内置的库函数，如  sqrt。
 * 
 * 示例 1：
 * 
 * 输入：16
 * 输出：True
 * 
 * 示例 2：
 * 
 * 输入：14
 * 输出：False
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num == 1) return true
  let left = 1, right = num
  while (left <= right) {
    let mid = parseInt((left + right) / 2)
    let temp = mid * mid
    if (temp == num) {
      return true
    } else if (temp > num) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
};
// @lc code=end

