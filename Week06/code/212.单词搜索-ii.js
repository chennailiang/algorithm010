/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 *
 * https://leetcode-cn.com/problems/word-search-ii/description/
 *
 * algorithms
 * Hard (40.79%)
 * Likes:    196
 * Dislikes: 0
 * Total Accepted:    17.1K
 * Total Submissions: 41.2K
 * Testcase Example:  '[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]\n["oath","pea","eat","rain"]'
 *
 * 给定一个二维网格 board 和一个字典中的单词列表 words，找出所有同时在二维网格和字典中出现的单词。
 * 
 * 
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。
 * 
 * 示例:
 * 
 * 输入: 
 * words = ["oath","pea","eat","rain"] and board =
 * [
 * ⁠ ['o','a','a','n'],
 * ⁠ ['e','t','a','e'],
 * ⁠ ['i','h','k','r'],
 * ⁠ ['i','f','l','v']
 * ]
 * 
 * 输出: ["eat","oath"]
 * 
 * 说明:
 * 你可以假设所有输入都由小写字母 a-z 组成。
 * 
 * 提示:
 * 
 * 
 * 你需要优化回溯算法以通过更大数据量的测试。你能否早点停止回溯？
 * 如果当前单词不存在于所有单词的前缀中，则可以立即停止回溯。什么样的数据结构可以有效地执行这样的操作？散列表是否可行？为什么？
 * 前缀树如何？如果你想学习如何实现一个基本的前缀树，请先查看这个问题： 实现Trie（前缀树）。
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  // 构建字典树
  class TrieNode {
    constructor() {
      this.END = false
      this.children = {}
    }
  }
  let root = null
  let Trie = function () {
    root = new TrieNode()
  };
  Trie.prototype.insert = function (word) {
    let currNode = root
    for (let i = 0; i < word.length; i++) {
      if (currNode.children[word[i]] == undefined) {
        currNode.children[word[i]] = new TrieNode()
      }
      currNode = currNode.children[word[i]]
    }
    currNode.END = true
  };
  // 初始化变量
  let m = board.length
  let n = board[0].length
  // 初始化字典树
  let wordsTrie = new Trie()
  for (let i = 0; i < words.length; i++) {
    wordsTrie.insert(words[i])
  }
  // DFS 搜索
  let boardDFS = (i, j, curStr, currNode) => {
    // 字典树中找到了
    if (currNode.END) {
      result.push(curStr)
      currNode.END = false
    }
    if (i < 0 || j < 0 || i == m || j == n) {
      return
    }
    const restore = board[i][j];
    if (restore == '#' || !currNode.children[restore]) {
      return
    }
    // 前进
    board[i][j] = '#'
    curStr += restore
    boardDFS(i - 1, j, curStr, currNode.children[restore])
    boardDFS(i + 1, j, curStr, currNode.children[restore])
    boardDFS(i, j - 1, curStr, currNode.children[restore])
    boardDFS(i, j + 1, curStr, currNode.children[restore])
    // 还原(回溯)
    board[i][j] = restore
  }
  // 寻找结果
  let result = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      boardDFS(i, j, '', root)
    }
  }
  return result
};
// @lc code=end

