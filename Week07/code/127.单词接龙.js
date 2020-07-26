/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 *
 * https://leetcode-cn.com/problems/word-ladder/description/
 *
 * algorithms
 * Medium (42.36%)
 * Likes:    365
 * Dislikes: 0
 * Total Accepted:    47.7K
 * Total Submissions: 111.7K
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord
 * 的最短转换序列的长度。转换需遵循如下规则：
 * 
 * 
 * 每次转换只能改变一个字母。
 * 转换过程中的中间单词必须是字典中的单词。
 * 
 * 
 * 说明:
 * 
 * 
 * 如果不存在这样的转换序列，返回 0。
 * 所有单词具有相同的长度。
 * 所有单词只由小写字母组成。
 * 字典中不存在重复的单词。
 * 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * 
 * 输出: 5
 * 
 * 解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
 * ⁠    返回它的长度 5。
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * 
 * 输出: 0
 * 
 * 解释: endWord "cog" 不在字典中，所以无法进行转换。
 * 
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return 0
  }
  const wordLength = beginWord.length // 每个单词长度都是相同的
  const comboDict = new Map()
  const visited = new Map()
  wordList.forEach((word) => {
    for (let i = 0; i < wordLength; i++) {
      let genericWord = word.substring(0, i) + '*' + word.substring(i + 1)
      if (!comboDict.get(genericWord)) {
        comboDict.set(genericWord, [])
      }
      comboDict.get(genericWord).push(word)
    }
  })
  const queue = []
  queue.push({ [beginWord]: 1 })
  visited.set(beginWord, true)
  while (queue.length > 0) {
    let node = queue.shift()
    let word = Object.keys(node)[0]
    let level = node[word]
    for (let i = 0; i < wordLength; i++) {
      const generic = word.substring(0, i) + '*' + word.substring(i + 1)
      const list = comboDict.get(generic)
      if (list) {
        for (let j = 0; j < list.length; j++) {
          if (list[j] === endWord) {
            return level + 1
          }
          if (!visited.get(list[j])) {
            visited.set(list[j], true)
            queue.push({ [list[j]]: level + 1 })
          }
        }
      }
    }
  }
  return 0
};
// @lc code=end

