/*
 * @lc app=leetcode.cn id=552 lang=javascript
 *
 * [552] 学生出勤记录 II
 *
 * https://leetcode-cn.com/problems/student-attendance-record-ii/description/
 *
 * algorithms
 * Hard (40.58%)
 * Likes:    82
 * Dislikes: 0
 * Total Accepted:    2.8K
 * Total Submissions: 6.9K
 * Testcase Example:  '1'
 *
 * 给定一个正整数 n，返回长度为 n 的所有可被视为可奖励的出勤记录的数量。 答案可能非常大，你只需返回结果mod 10^9 + 7的值。
 * 
 * 学生出勤记录是只包含以下三个字符的字符串：
 * 
 * 
 * 'A' : Absent，缺勤
 * 'L' : Late，迟到
 * 'P' : Present，到场
 * 
 * 
 * 如果记录不包含多于一个'A'（缺勤）或超过两个连续的'L'（迟到），则该记录被视为可奖励的。
 * 
 * 示例 1:
 * 
 * 
 * 输入: n = 2
 * 输出: 8 
 * 解释：
 * 有8个长度为2的记录将被视为可奖励：
 * "PP" , "AP", "PA", "LP", "PL", "AL", "LA", "LL"
 * 只有"AA"不会被视为可奖励，因为缺勤次数超过一次。
 * 
 * 注意：n 的值不会超过100000。
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
  let P = 1 // 不含A以P结尾的数量
  let L = 1 // 不含A以L结尾不以LL结尾的数量 
  let LL = 0  // 不含A以LL结尾的数量 
  let A = 1 // 含有A并且以A结尾的数量 
  let AP = 0  // 含有A并且以P结尾的数量 
  let AL = 0  // 含有A并且以L结尾不以LL结尾的数量 
  let ALL = 0 // 含有A并且以LL结尾的数量 
  for (let i = 1; i < n; ++i) {
    [P, L, LL, A, AP, AL, ALL] = [
      (P + L + LL) % 1000000007,
      P,
      L,
      (P + L + LL) % 1000000007,
      (A + AP + AL + ALL) % 1000000007,
      (A + AP) % 1000000007,
      AL
    ]
  }
  return (P + L + LL + A + AP + AL + ALL) % 1000000007
};
// @lc code=end

