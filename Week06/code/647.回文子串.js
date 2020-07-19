/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 *
 * https://leetcode-cn.com/problems/palindromic-substrings/description/
 *
 * algorithms
 * Medium (61.75%)
 * Likes:    282
 * Dislikes: 0
 * Total Accepted:    32.6K
 * Total Submissions: 52.5K
 * Testcase Example:  '"abc"'
 *
 * 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
 * 
 * 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被计为是不同的子串。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "abc"
 * 输出: 3
 * 解释: 三个回文子串: "a", "b", "c".
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: "aaa"
 * 输出: 6
 * 说明: 6个回文子串: "a", "a", "a", "aa", "aa", "aaa".
 * 
 * 
 * 注意:
 * 
 * 
 * 输入的字符串长度不会超过1000。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let dp = new Array(s.length).fill('').map(() => new Array(s.length).fill(false))
  let num = 0
  // 外层循环是计算的字符串长度
  for (let i = 0; i < s.length; i++) {
    // 内层循环是开始位置
    for (let j = 0; j <= i; j++) {
      // 在首位相等时,如果长度是1(如a)或2(如aa)，或去收尾字符串是回文
      if (s[i] === s[j] && (i - j < 2 || dp[j + 1][i - 1])) {
        dp[j][i] = true
        num++
      }
    }
  }
  return num
};
// @lc code=end

