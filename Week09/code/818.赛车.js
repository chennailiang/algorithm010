/*
 * @lc app=leetcode.cn id=818 lang=javascript
 *
 * [818] 赛车
 */

// @lc code=start
/**
 * @param {number} target
 * @return {number}
 */
var racecar = function (target) {
  let queue = [[0, 1]]
  let visited = new Set(['0,1'])
  let res = 0

  while (queue.length) {
    let tmp = [];
    for (let i = 0; i < queue.length; i++) {
      let [posi, speed] = queue[i]
      if (posi == target) return res

      // A 加速 
      let newP = posi + speed, newS = speed * 2
      addQueue(newP, newS, tmp)

      // R 开始变换方向
      newP = posi, newS = speed > 0 ? -1 : 1
      addQueue(newP, newS, tmp)
    }

    res++
    queue = tmp
  }

  return -1

  function addQueue(posi, speed, tmp) {
    let key = `${posi},${speed}`
    if (!visited.has(key) && posi > 0 && posi < 2 * target) {
      visited.add(key)
      tmp.push([posi, speed])
    }
  }
};
// @lc code=end

