/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 *
 * https://leetcode-cn.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (40.11%)
 * Likes:    713
 * Dislikes: 0
 * Total Accepted:    123.2K
 * Total Submissions: 305.8K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 
 * 判断你是否能够到达最后一个位置。
 * 
 * 示例 1:
 * 
 * 输入: [2,3,1,1,4]
 * 输出: true
 * 解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,2,1,0,4]
 * 输出: false
 * 解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // let max = 0 // 能够走到的数组下标
  // for (let i = 0; i < nums.length; i++) {
  //   if (max < i) return false // 当前这一步都走不到，后面更走不到了
  //   max = Math.max(nums[i] + i, max)
  // }
  // return true

  // O(n²)
  // const res = new Array(nums.length)
  // if (res[0] !== 0 || nums.length === 1) res[0] = true
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 1; j <= nums[i]; j++) {
  //     if (i + j > nums.length - 1) break
  //     res[i + j] = true
  //   }
  // }
  // for (let k = 0; k < res.length; k++) {
  //   if (!res[k]) return false
  // }
  // return true

  // 贪心
  if (!nums.length) return false
  let canReachable = nums.length - 1
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] + i >= canReachable) {
      canReachable = i
    }
  }
  return canReachable === 0
};
// @lc code=end

