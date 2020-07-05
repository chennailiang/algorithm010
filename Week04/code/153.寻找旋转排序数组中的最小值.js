/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 *
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (50.94%)
 * Likes:    202
 * Dislikes: 0
 * Total Accepted:    57.4K
 * Total Submissions: 112.4K
 * Testcase Example:  '[3,4,5,1,2]'
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 
 * ( 例如，数组 [0,1,2,4,5,6,7]  可能变为 [4,5,6,7,0,1,2] )。
 * 
 * 请找出其中最小的元素。
 * 
 * 你可以假设数组中不存在重复元素。
 * 
 * 示例 1:
 * 
 * 输入: [3,4,5,1,2]
 * 输出: 1
 * 
 * 示例 2:
 * 
 * 输入: [4,5,6,7,0,1,2]
 * 输出: 0
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 思路：二分，单调递增、且有索引和边界
  // 无旋转：nums[left] <= nums[mid] <= nums[right]  min = nums[left]
  // 有旋转：nums[left] >= nums[mid] <= nums[right]  收缩右边界
  // 有旋转：nums[left] <= nums[mid] >= nums[right]  收缩左边界
  let left = 0, right = nums.length - 1
  while (left < right) {
    let mid = (left + right) / 2 | 0
    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return nums[left]

  // while (left <= right) {
  //   if (nums[left] <= nums[right]) return nums[left]
  //   let mid = (left + right) / 2 | 0
  //   if (nums[left] <= nums[mid]) {
  //     left = mid + 1
  //   } else {
  //     right = mid
  //   }
  // }
};
// @lc code=end

