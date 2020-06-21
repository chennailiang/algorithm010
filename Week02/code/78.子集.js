/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (77.41%)
 * Likes:    608
 * Dislikes: 0
 * Total Accepted:    97.9K
 * Total Submissions: 126.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 
 * 说明：解集不能包含重复的子集。
 * 
 * 示例:
 * 
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let n = nums.length;
  let tmpPath = [];
  let res = [];
  let backtrack = (tmpPath, start) => {
    res.push(tmpPath);
    for (let i = start; i < n; i++) {
      tmpPath.push(nums[i]);
      backtrack(tmpPath.slice(), i + 1);
      tmpPath.pop();
    }
  }
  backtrack(tmpPath, 0);
  return res;
};
// @lc code=end

