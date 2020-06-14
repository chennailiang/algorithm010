/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (58.75%)
 * Likes:    614
 * Dislikes: 0
 * Total Accepted:    158.7K
 * Total Submissions: 259.6K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 说明:
 * 
 * 
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // // 解法一
  // // 思路：两次循环、从头开始覆盖非0元素、末尾补0
  // // 时间复杂度：`O(n)`，两次非嵌套循环在最极端情况下的时间复杂度为 2n
  // // 空间复杂度：`O(1)`
  // let j = 0
  // // 首次遍历数组，从头开始覆盖非0元素
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== 0) nums[j++] = nums[i]
  // }
  // // 数组末尾补0
  // for (let i = j; i < nums.length; i++) {
  //   nums[i] = 0
  // }

  // // 解法二（优化）
  // // 思路：一次循环、从头开始覆盖非0元素，非0元素向前移动时，原索引位置用0替换
  // // 时间复杂度：`O(n)`
  // // 空间复杂度：`O(1)`
  // // 记录非0元素下标
  // let j = 0
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== 0) {
  //     // 从头开始覆盖非0元素
  //     nums[j] = nums[i]
  //     // 下标不同时，i 下标元素替换成 0，循环结束后，0 在数组末尾
  //     if (i !== j++) nums[i] = 0
  //   }
  //   // console.log(nums)
  //   /* 输入数组：[0,1,0,3,2,0]，每次循环打印 nums
  //     i: 0  nums: [0,1,0,3,2,0]
  //     i: 1  nums: [1,0,0,3,2,0]
  //     i: 2  nums: [1,0,0,3,2,0]
  //     i: 3  nums: [1,3,0,0,2,0]
  //     i: 4  nums: [1,3,2,0,0,0]
  //     i: 5  nums: [1,3,2,0,0,0]
  //   */
  // }

  // 解法三
  // 思路：一次循环、双指针、交换两个元素
  // 时间复杂度：`O(n)`
  // 空间复杂度：`O(1)`
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    // 非0元素时，交换两个指针指向的元素
    if (nums[i] !== 0) [nums[j++], nums[i]] = [nums[i], nums[j]]
  }

  // // 解法四（数组方法）
  // // 思路：倒序遍历（正序遍历删除元素会改变原数组元素的索引）、调用数组 `splice` 和 `push` 方法
  // // 时间复杂度：`O(n²)`，数组 `splice` 方法的时间复杂度为 `O(n)`
  // // 空间复杂度：`O(1)`
  // for(let i= nums.length; i >= 0; i--){
  //   if(nums[i] === 0){
  //     nums.splice(i,1)
  //     nums.push(0)
  //   }
  // }

  // //  解法五（不符题意）
  // // 思路：创建一个新数组，利用索引 i 和 j 分别指向数组的首尾，将非0元素往前放，0往后放
  // // 时间复杂度：`O(n)`
  // // 空间复杂度：`O(n)`
  // const nums_new = []
  // let i = 0
  // let j = nums.length - 1
  // for (let k = 0; k < nums.length; k++) {
  //   if (nums[k] !== 0) {
  //     nums_new[i++] = nums[k]
  //   }else{
  //     nums_new[j--] = 0
  //   }
  // }
  // nums = nums_new
};
// @lc code=end

