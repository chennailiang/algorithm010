/*
 * @lc app=leetcode.cn id=493 lang=javascript
 *
 * [493] 翻转对
 *
 * https://leetcode-cn.com/problems/reverse-pairs/description/
 *
 * algorithms
 * Hard (25.68%)
 * Likes:    116
 * Dislikes: 0
 * Total Accepted:    6K
 * Total Submissions: 21.9K
 * Testcase Example:  '[1,3,2,3,1]'
 *
 * 给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。
 * 
 * 你需要返回给定数组中的重要翻转对的数量。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,3,2,3,1]
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [2,4,3,5,1]
 * 输出: 3
 * 
 * 
 * 注意:
 * 
 * 
 * 给定数组的长度不会超过50000。
 * 输入数组中的所有数字都在32位整数的表示范围内。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  let count = 0
  let mergeArr = (arr, left, mid, right) => {
    let temp = []
    let i = left, j = mid + 1, sortedIndex = 0, p = j
    let tmpI = i, tmpJ = j
    while (tmpI <= mid) {
      while (tmpJ <= right && arr[tmpI] / 2 > arr[tmpJ]) {
        tmpJ++
      }
      count += tmpJ - (mid + 1)
      tmpI++
    }
    let sorted = [...arr.slice(left, right + 1)].sort((a, b) => a - b);
    for (let r = 0; r < sorted.length; r++) {
      arr[left + r] = sorted[r]
    }
  }
  let mergeSort = (arr, left, right) => {
    if (left >= right) {
      return
    }
    let mid = (left + right) >> 1
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)
    mergeArr(arr, left, mid, right)
  }
  mergeSort(nums, 0, nums.length - 1)
  return count
};
// @lc code=end

