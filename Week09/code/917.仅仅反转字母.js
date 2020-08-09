/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  var arr = S.match(/[a-zA-Z]/g)
  if (arr === null) return S
  return S.replace(/[a-zA-Z]/g, () => arr.pop())
};
// @lc code=end

