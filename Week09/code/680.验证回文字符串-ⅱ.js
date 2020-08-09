/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (s[left] !== s[right]) {
      let str = s.split("")
      let strRight = s.split("")
      str.splice(left, 1)
      strRight.splice(right, 1)

      return str.join("") === str.reverse().join("") || strRight.join("") === strRight.reverse().join("")
    }
    left++
    right--
  }
  return true
};
// @lc code=end

