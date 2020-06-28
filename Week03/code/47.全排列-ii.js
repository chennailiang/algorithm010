/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (59.05%)
 * Likes:    325
 * Dislikes: 0
 * Total Accepted:    66.8K
 * Total Submissions: 112.8K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,1,2]
 * 输出:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const swap = function (nums, i, j) {
    if (i === j) return
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }

  const cal = function (nums, first, result) {
    if (nums.length === first) {
      result.push([...nums])
      return
    }
    const map = new Map()
    for (let i = first; i < nums.length; i++) {
      if (!map.get(nums[i])) {
        map.set(nums[i], true)
        swap(nums, first, i)
        cal(nums, first + 1, result)
        swap(nums, first, i)
      }
    }
  }

  if (nums == null) return
  nums.sort((a, b) => a - b)
  const res = []
  cal(nums, 0, res)
  return res

};
// @lc code=end

