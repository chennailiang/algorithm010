/*
 * @lc app=leetcode.cn id=363 lang=javascript
 *
 * [363] 矩形区域不超过 K 的最大数值和
 *
 * https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/description/
 *
 * algorithms
 * Hard (36.44%)
 * Likes:    102
 * Dislikes: 0
 * Total Accepted:    4K
 * Total Submissions: 10.6K
 * Testcase Example:  '[[1,0,1],[0,-2,3]]\n2'
 *
 * 给定一个非空二维矩阵 matrix 和一个整数 k，找到这个矩阵内部不大于 k 的最大矩形和。
 * 
 * 示例:
 * 
 * 输入: matrix = [[1,0,1],[0,-2,3]], k = 2
 * 输出: 2 
 * 解释: 矩形区域 [[0, 1], [-2, 3]] 的数值和是 2，且 2 是不超过 k 的最大数字（k = 2）。
 * 
 * 
 * 说明：
 * 
 * 
 * 矩阵内的矩形区域面积必须大于 0。
 * 如果行数远大于列数，你将如何解答呢？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
  const insertIndex = function (nums, target) {
    let low = 0
    let high = nums.length - 1
    let mid
    while (low <= high) {
      mid = (low + high) >> 1
      if (nums[mid] === target) {
        return mid
      } else if (nums[mid] > target) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    return low
  }
  let max = -Infinity
  const m = matrix.length
  const n = matrix[0].length
  for (let i = 0; i < n; i++) {
    const rowSum = Array(m).fill(0)
    for (let j = i; j < n; j++) {
      for (let k = 0; k < m; k++) {
        rowSum[k] += matrix[k][j];
      }
      let sum = 0
      const arr = [0]
      for (let r = 0; r < m; r++) {
        sum += rowSum[r]
        let idx = insertIndex(arr, sum - k)
        idx = idx >= arr.length ? arr.length - 1 : idx
        const val = sum - arr[idx]
        if (idx > -1 && val <= k) {
          if (val === k) return k
          else max = Math.max(max, val)
        }
        const insertIdx = insertIndex(arr, sum)
        if (arr[insertIdx] !== sum) {
          // 在合适的index位置插入该值，保证arr是个有序数组
          arr.splice(insertIdx, 0, sum)
        }
      }

    }
  }
  return max
};
// @lc code=end

