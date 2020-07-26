## 二叉搜索树

- 左子树上所有节点的值均小于它的根节点的值

- 右子树上所有节点的值均大于它的根节点的值
- 依次类推：左右子树也分别为二叉搜索树
- 中序遍历：升序遍历

## 平衡二叉树

1. 概念解析
   - 左子树和右子树的深度差（平衡因子）的绝对值不超过 1
   - 左右子树也分别为平衡二叉树
2. 基本实现
   - 左旋
   - 右旋
   - 左右旋
   - 右左旋
3. 性能分析
   - 节点需要存储额外信息
   - 调整次数频繁

## 红黑树

1. 概念解析
  - 每个节点要么是红色要么是黑色
  - 根节点是黑色的
  - 每个叶节点（NIL 节点/空节点）都是黑色的
  - 任何相邻的阶段都不能同时为红色
  - 从任一节点到其每个叶子节点的所有路径都包含相同数目的黑色节点
2. 实现技巧
  - 把红黑树的平衡调整的过程比作魔方复原
  - 找准关注节点：不要搞丢、搞错关注节点
  - 插入操作的平衡调整比较简单而删除操作就比较复杂
3. 适用场景
  - 解决普通二叉树在频繁插入、删除等动态更新操作时时间复杂度退化问题
  - 实际工程中更倾向用跳表来替代


## 字典树
1. 概念解析
  - 节点本身不存在完整单词
  - 从根节点到某一节点路径经过的字符串连接起来为该节点对应的字符串
  - 每个节点的所有子节点路径代表的字符都不相同
2. 适用场景
  - 统计和排序大量的字符串
  - 搜索引擎词频统计及关键字提醒


## 并查集
1. 概念解析
  - 一种树型数据结构在使用中以森林来表示
  - 用于处理不交集的合并及查询问题
2. 常见操作
  - 初始化：把每个点所在的集合测试为其自身 -> O(n)
  - 合并：将两个元素所在的集合合并为一个集合 -> 建立关系
3. 查找：查找元素所在集合（即根节点）
4. 优化方式
 - 将 rank 浅的合并到 rank 深的
 - 路径压缩
5. 并查集代码模板
```
def init(p):
    # for i = 0 .. n: p[i] = i
    p = [i for i in range(n)]
    
def union(self, p, i, j):
    p1 = self.parent(p, i)
    p2 = self.parent(p, j)
    p[p1] = p2

def parent(self, p, i):
    root = i
    while p[root] != root:
        root = p[root]
    # 路径压缩
    while p[i] != i:
        x = i; i = p[i]; p[x] = root
    return root

```

## 搜索算法
1. 遍历搜索
  - 每个节点都要访问一次
  - 每个节点仅要访问一次
  - 暴力搜索：时间复杂度：O(E)/空间复杂度：O(V)
2. 广度优先搜索（BFS）
```
def BFS(graph, start, end):
    """
    1. visited -> 记录已被访问的顶点
    2. queue -> 存储已被访问但相连的顶点还未被访问的顶点
    """
    queue = []
    queue.append([start])
    
    visited = set()
    visited.add(start)
    
    while queue:
        node = queue.pop()
        visited.add(node)
        
        process(node)
        nodes = generate_related_nodes(node)
        queue.push(nodes)
        
    # other processing work
    ...
```
3. 深度优先搜索（DFS）

```
def DFS(self, tree):
    if tree.root is None: return []
    
    visited, stack = [], []
    while stack:
        node = stack.pop()
        visited.add(node)
        
        process(node)
        nodes = generate_related_nodes(node)
        stack.push(nodes)
        
    # other processing work
    ...
```
```
def DFS(node, visited):
    visited = set()
    visited.add(node)
    
    # process current node here
    ...
    for next_node in node.children():
        if not next_node in visited:
            DFS(next_node, visited)
```
4. 高级搜索
  - 剪枝
  - 双向搜索
  - 启发式搜索

```
def AstarSearch(graph, start, end):
    """
    1. 启发式函数评价哪些节点最优希望是我们要找的节点的估计成本
    2. 启发式函数是一种告知搜索方向的方法来猜测会导向的一个目标
    """
    # 优先级 -> 估价函数
    pq = collections.priority_queue()
    pq.append([start])
    visited.add(start)
    
    while pq:
        node = pq.pop()
        visited.add(node)
        
        process（node)
        
        nodes = generate_related_nodes(node)
        unvisited = [node for node in nodes if node not in visited]
        pq.push(unvisited)
```
