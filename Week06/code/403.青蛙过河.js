/*
 * @lc app=leetcode.cn id=403 lang=javascript
 *
 * [403] 青蛙过河
 *
 * https://leetcode-cn.com/problems/frog-jump/description/
 *
 * algorithms
 * Hard (35.35%)
 * Likes:    83
 * Dislikes: 0
 * Total Accepted:    7.4K
 * Total Submissions: 20.3K
 * Testcase Example:  '[0,1,3,4,5,7,9,10,12]'
 *
 * 一只青蛙想要过河。 假定河流被等分为 x 个单元格，并且在每一个单元格内都有可能放有一石子（也有可能没有）。 青蛙可以跳上石头，但是不可以跳入水中。
 * 
 * 给定石子的位置列表（用单元格序号升序表示）， 请判定青蛙能否成功过河（即能否在最后一步跳至最后一个石子上）。 开始时，
 * 青蛙默认已站在第一个石子上，并可以假定它第一步只能跳跃一个单位（即只能从单元格1跳至单元格2）。
 * 
 * 如果青蛙上一步跳跃了 k 个单位，那么它接下来的跳跃距离只能选择为 k - 1、k 或 k + 1个单位。
 * 另请注意，青蛙只能向前方（终点的方向）跳跃。
 * 
 * 请注意：
 * 
 * 
 * 石子的数量 ≥ 2 且 < 1100；
 * 每一个石子的位置序号都是一个非负整数，且其 < 2^31；
 * 第一个石子的位置永远是0。
 * 
 * 
 * 示例 1:
 * 
 * 
 * [0,1,3,5,6,8,12,17]
 * 
 * 总共有8个石子。
 * 第一个石子处于序号为0的单元格的位置, 第二个石子处于序号为1的单元格的位置,
 * 第三个石子在序号为3的单元格的位置， 以此定义整个数组...
 * 最后一个石子处于序号为17的单元格的位置。
 * 
 * 返回 true。即青蛙可以成功过河，按照如下方案跳跃： 
 * 跳1个单位到第2块石子, 然后跳2个单位到第3块石子, 接着 
 * 跳2个单位到第4块石子, 然后跳3个单位到第6块石子, 
 * 跳4个单位到第7块石子, 最后，跳5个单位到第8个石子（即最后一块石子）。
 * 
 * 
 * 示例 2:
 * 
 * 
 * [0,1,2,3,4,8,9,11]
 * 
 * 返回 false。青蛙没有办法过河。 
 * 这是因为第5和第6个石子之间的间距太大，没有可选的方案供青蛙跳跃过去。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
  // 确定状态
  let ability = new Array(stones.length)  // 存每一个单元格是否有解
  let step = {}   //  存跳到每一个单元格的步跳跃距离可能性
  // 初始化数据
  ability[0] = true
  step[stones[0]] = new Set().add(0)
  // 第二个单位格开始遍历
  for (let i = 1; i < ability.length; i++) {
    ability[i] = false
    step[stones[i]] = new Set()
    // 遍历之前的单位看是否有满足条件的单位
    for (let j = 0; j < i; j++) {
      // 取出在这之前每一个单元格基于前面单元格跳跃步数的可能性
      for (let k of step[stones[j]]) {
        /* 
            只要之前的所有单元格其中一个满足两个条件
            1.所遍历到的之前的单元格可以到达
            2.此单元格对应跳跃步数的可能性满足题目中所描述的 "如果青蛙上一步跳跃了 k 个单位，那么它接下来的跳跃距离只能选择为 k - 1、k 或 k + 1个单位。"

            则当前单元格可到达
        */
        if (ability[j] && (stones[i] - stones[j] >= k - 1 && stones[i] - stones[j] <= k + 1)) {
          ability[i] = true
          // 存储所有可以到达该单元格的步数
          step[stones[i]].add(stones[i] - stones[j])
        }
      }
    }
  }
  // 返回最后一个点是否到达情况
  return ability[ability.length - 1]
};
// @lc code=end

