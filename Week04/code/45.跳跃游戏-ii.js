/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 *
 * https://leetcode-cn.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (36.58%)
 * Likes:    612
 * Dislikes: 0
 * Total Accepted:    68.4K
 * Total Submissions: 185.5K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 * 
 * 示例:
 * 
 * 输入: [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
 * 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 * 
 * 
 * 说明:
 * 
 * 假设你总是可以到达数组的最后一个位置。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let farthestPos = 0 // 记录当前能去到的最远的位置，遍历每个点都会求能跳到的最远位置，与它比较，如果把它大就更新它
  let endOfCanReach = 0
  let steps = 0
  for (let i = 0; i < nums.length - 1; i++) {
    farthestPos = Math.max(farthestPos, i + nums[i])
    if (i === endOfCanReach) {
      endOfCanReach = farthestPos // 可抵达区间的右端位置
      steps++
    }
    if (endOfCanReach >= nums.length - 1) { // 一旦新的可抵达区间触碰到nums数组的边界，则直接break，不用对区间的点遍历了
      break
    }
  }
  return steps
};
// @lc code=end

