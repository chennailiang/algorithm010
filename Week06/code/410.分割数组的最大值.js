/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 *
 * https://leetcode-cn.com/problems/split-array-largest-sum/description/
 *
 * algorithms
 * Hard (43.22%)
 * Likes:    183
 * Dislikes: 0
 * Total Accepted:    7.9K
 * Total Submissions: 17.9K
 * Testcase Example:  '[7,2,5,10,8]\n2'
 *
 * 给定一个非负整数数组和一个整数 m，你需要将这个数组分成 m 个非空的连续子数组。设计一个算法使得这 m 个子数组各自和的最大值最小。
 * 
 * 注意:
 * 数组长度 n 满足以下条件:
 * 
 * 
 * 1 ≤ n ≤ 1000
 * 1 ≤ m ≤ min(50, n)
 * 
 * 
 * 示例: 
 * 
 * 
 * 输入:
 * nums = [7,2,5,10,8]
 * m = 2
 * 
 * 输出:
 * 18
 * 
 * 解释:
 * 一共有四种方法将nums分割为2个子数组。
 * 其中最好的方式是将其分为[7,2,5] 和 [10,8]，
 * 因为此时这两个子数组各自的和的最大值为18，在所有情况中最小。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  let start = 0
  let end = 0
  for (let i = 0; i < nums.length; ++i) {
    end += nums[i]
    if (start < nums[i]) start = nums[i]
  }
  while (start < end) {
    let mid = parseInt((end - start) / 2 + start)
    let count = 0
    let sum = 0
    for (let i = 0; i < nums.length; ++i) {
      if (sum + nums[i] > mid) {
        ++count
        sum = nums[i]
      } else {
        sum += nums[i]
      }
    }
    if (count < m) {
      end = mid
    } else {
      start = mid + 1
    }
  }
  return start
};
// @lc code=end

