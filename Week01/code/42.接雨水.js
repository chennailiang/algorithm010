/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (51.24%)
 * Likes:    1354
 * Dislikes: 0
 * Total Accepted:    109.3K
 * Total Submissions: 213.3K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 * 
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢
 * Marcos 贡献此图。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let sum = 0
  for (let index = 1; index < height.length - 1; index++) {
    // 左边最大高度
    let leftMax = 0
    for (let i = index - 1; i >= 0; i--) {
      leftMax = height[i] >= leftMax ? height[i] : leftMax
    }
    // 右边最大高度
    let rightMax = 0
    for (let i = index + 1; i < height.length; i++) {
      rightMax = height[i] >= rightMax ? height[i] : rightMax
    }
    // 获取两边最大高度中的较低高度
    let min = Math.min(leftMax, rightMax)
    if (min > height[index]) {
      //接水量 = 两边最大高度中的较低高度 - 当前项的高度
      sum = sum + min - height[index]
    }
  }
  return sum
};
// @lc code=end

