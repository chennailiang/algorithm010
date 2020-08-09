/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let strArr = s.split('')

  let reverse = (start, end) => {
    let temp = null
    while (start < end) {
      temp = strArr[start]
      strArr[start] = strArr[end]
      strArr[end] = temp
      start++
      end--
    }
  }

  for (let i = 0; i < s.length; i += 2 * k) {
    reverse(i, i + k - 1)
  }

  return strArr.join('')
};
// @lc code=end

