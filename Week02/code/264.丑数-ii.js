/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 *
 * https://leetcode-cn.com/problems/ugly-number-ii/description/
 *
 * algorithms
 * Medium (52.19%)
 * Likes:    307
 * Dislikes: 0
 * Total Accepted:    27.3K
 * Total Submissions: 52.1K
 * Testcase Example:  '10'
 *
 * 编写一个程序，找出第 n 个丑数。
 * 
 * 丑数就是质因数只包含 2, 3, 5 的正整数。
 * 
 * 示例:
 * 
 * 输入: n = 10
 * 输出: 12
 * 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
 * 
 * 说明:  
 * 
 * 
 * 1 是丑数。
 * n 不超过1690。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  // https://leetcode-cn.com/problems/chou-shu-lcof/solution/shuang-jie-fa-dong-tai-gui-hua-zui-xiao-dui-javasc/
  const defaultCmp = (x, y) => x > y;
  const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
  class Heap {
    /**
     * 默认是最大堆
     * @param {Function} cmp
     */
    constructor(cmp = defaultCmp) {
      this.container = [];
      this.cmp = cmp;
    }

    insert(data) {
      const { container, cmp } = this;

      container.push(data);
      let index = container.length - 1;
      while (index) {
        let parent = Math.floor((index - 1) / 2);
        if (!cmp(container[index], container[parent])) {
          return;
        }
        swap(container, index, parent);
        index = parent;
      }
    }

    extract() {
      const { container, cmp } = this;
      if (!container.length) {
        return null;
      }

      swap(container, 0, container.length - 1);
      const res = container.pop();
      const length = container.length;
      let index = 0,
        exchange = index * 2 + 1;

      while (exchange < length) {
        // 如果有右节点，并且右节点的值大于左节点的值
        let right = index * 2 + 2;
        if (right < length && cmp(container[right], container[exchange])) {
          exchange = right;
        }
        if (!cmp(container[exchange], container[index])) {
          break;
        }
        swap(container, exchange, index);
        index = exchange;
        exchange = index * 2 + 1;
      }

      return res;
    }

    top() {
      if (this.container.length) return this.container[0];
      return null;
    }
  }
  const heap = new Heap((x, y) => x < y);
  const res = new Array(n);
  const map = {};
  const primes = [2, 3, 5];

  heap.insert(1);
  map[1] = true;
  for (let i = 0; i < n; ++i) {
    res[i] = heap.extract();

    for (const prime of primes) {
      let tmp = res[i] * prime;
      if (!map[tmp]) {
        heap.insert(tmp);
        map[tmp] = true;
      }
    }
  }
  return res[n - 1];
};
// @lc code=end

