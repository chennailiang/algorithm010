# 深度优先搜索

## Depth-First-Search 模板

- 递归

```
visited = set()
def dfs(node, visited):
if node in visited: # terminator
# already visited
return
visited.add(node)
# process current node here.
...
for next_node in node.children():
if not next_node in visited:
dfs(next_node, visited)
```

- 非递归

```
def DFS(self, tree):
if tree.root is None:
return []
visited, stack = [], [tree.root]
while stack:
node = stack.pop()
visited.add(node)
process (node)
nodes = generate_related_nodes(node)
stack.push(nodes)
# other processing work
...
```



# 广度优先搜索

## Breadth-First-Search 模板

```
def BFS(graph, start, end):
queue = []
queue.append([start])
visited.add(start)
while queue:
node = queue.pop()
visited.add(node)
process(node)
nodes = generate_related_nodes(node)
queue.push(nodes)
# other
```



# 贪心算法 Greedy

- 贪心算法是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法。



## 与动态规划的区别

- 贪心算法与动态规划的不同在于它对每个子问题的解决方案都做出选择，不能回退。
- 动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能。



## 使用场景

- 简单地说，问题能够分解成子问题来解决，子问题的最优解能递推到最终问题的最优解。这种子问题最优解称为最优子结构。



# 二分查找

## 前提

1. 目标函数单调性（单调递增或者递减）
2. 存在上下界（bounded）
3. 能够通过索引访问（index accessible)



## 代码模板

- 单调递增
- 整数

```
left, right = 0, len(array) - 1
while left <= right:
mid = (left + right) / 2
if array[mid] == target:
# find the target!!
break or return result
elif array[mid] < target:
left = mid + 1
else:
right = mid - 1
```



# 思考题

使用二分查找，寻找一个半有序数组 [4, 5, 6, 7, 0, 1, 2] 中间无序的地方

即求153题：寻找旋转排序数组中的最小值

```javascript
var find = function (nums) {
  // 思路：二分，单调递增、且有索引和边界
  // 无旋转：nums[left] <= nums[mid] <= nums[right]  min = nums[left]
  // 有旋转：nums[left] >= nums[mid] <= nums[right]  收缩右边界
  // 有旋转：nums[left] <= nums[mid] >= nums[right]  收缩左边界
  let left = 0, right = nums.length - 1
  while (left < right) {
    let mid = (left + right) / 2 | 0
    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  // left 即为无序位置的下标
  return left
};
```

