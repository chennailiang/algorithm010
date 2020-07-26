/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (49.72%)
 * Likes:    1074
 * Dislikes: 0
 * Total Accepted:    221.6K
 * Total Submissions: 445.7K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 递推思想，找最近重复子问题
  // 1:1
  // 2:2
  // 3:f(1)+f(2)
  // 4:f(2)+f(3)
  // n:f(n-2)+f(n-1)

  // // 解法一
  // // 时间复杂度：O(n)
  // // 空间复杂度：O(n)
  // if (n <= 2) return n
  // const a = [1, 2]
  // for (let i = 2; i < n; i++) {
  //   a[i] = a[i - 1] + a[i - 2]
  // }
  // return a[n - 1]

  // 解法二
  // 思路：循环、只保存最后三个值
  // 时间复杂度：O(n)
  // 空间复杂度：O(1)
  if (n <= 2) return n
  let f1 = 1
  let f2 = 2
  let f3 = 3
  for (let i = 2; i < n; i++) {
    f3 = f1 + f2
    f1 = f2
    f2 = f3
  }
  return f3

  // // 解法三
  // // 思路：斐波那契数列公式
  // // 时间复杂度：O(log n)
  // // 空间复杂度：O(1)
  // const sqrt_5 = Math.sqrt(5);
  // const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2, n + 1);
  // return Math.round(fib_n / sqrt_5);
};
// @lc code=end

