/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (62.81%)
 * Likes:    1105
 * Dislikes: 0
 * Total Accepted:    288.4K
 * Total Submissions: 459.1K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // 迭代
  const head = new ListNode()
  let prev = head
  while (l1 && l2) {
    if (l1.val > l2.val) {
      prev.next = l2
      // 向后移动一个节点
      l2 = l2.next
    } else {
      prev.next = l1
      l1 = l1.next
    }
    // prev移动到新节点
    prev = prev.next
  }
  // 当其中一个链表最后一个节点指向null时，prev指向还有节点未遍历完的链表
  prev.next = l1 ? l1 : l2
  return head.next
};
// @lc code=end

