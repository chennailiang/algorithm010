/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 *
 * https://leetcode-cn.com/problems/walking-robot-simulation/description/
 *
 * algorithms
 * Easy (35.29%)
 * Likes:    95
 * Dislikes: 0
 * Total Accepted:    9.1K
 * Total Submissions: 25.2K
 * Testcase Example:  '[4,-1,3]\n[]'
 *
 * 机器人在一个无限大小的网格上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令：
 * 
 * 
 * -2：向左转 90 度
 * -1：向右转 90 度
 * 1 <= x <= 9：向前移动 x 个单位长度
 * 
 * 
 * 在网格上有一些格子被视为障碍物。
 * 
 * 第 i 个障碍物位于网格点  (obstacles[i][0], obstacles[i][1])
 * 
 * 机器人无法走到障碍物上，它将会停留在障碍物的前一个网格方块上，但仍然可以继续该路线的其余部分。
 * 
 * 返回从原点到机器人所有经过的路径点（坐标为整数）的最大欧式距离的平方。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入: commands = [4,-1,3], obstacles = []
 * 输出: 25
 * 解释: 机器人将会到达 (3, 4)
 * 
 * 
 * 示例 2：
 * 
 * 输入: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
 * 输出: 65
 * 解释: 机器人在左转走到 (1, 8) 之前将被困在 (1, 4) 处
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= commands.length <= 10000
 * 0 <= obstacles.length <= 10000
 * -30000 <= obstacle[i][0] <= 30000
 * -30000 <= obstacle[i][1] <= 30000
 * 答案保证小于 2 ^ 31
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  let obstacleMap = {}
  obstacles.forEach(o => {
    if (o.length > 0) obstacleMap[o[0] + ',' + o[1]] = true
  })
  let res = 0
  // 以上右下左顺时针的方向定义x和y的方向向量
  let dx = [0, 1, 0, -1] // x的方向向量
  let dy = [1, 0, -1, 0] // y的方向向量
  let [x, y, di] = [0, 0, 0]// x,y分别代表当前坐标，di代表方向向量的索引位置
  commands.forEach((c, index) => {
    /* 
    这个地方，方向的控制可以这样理解，根据题意向北出发也就是从[0,0]开始
    沿y轴的正方向移动所以是 x + 0,y + 1,当前的方向向量是[dx[di],dy[di]],也就是
    [0,1]，当向右转时根据初始方向和我们顺时针定义方向向量数组，此时右转是顺时针转向
    所以我们的方向向量索引加1，同理左转便是逆时针索引减1，（但是js好像无法负数取模，只能向前前进3位）（）%4为在长度为4的数组上去模
    避免不然一直右转就会数组越界
    */
    // 向右转
    if (c == -1) di = (di + 1) % 4
    // 向左转(di - 1) % 4........
    if (c == -2) di = (di + 3) % 4

    if (c > 0) {
      // 每走一步计算一次最大值
      for (let z = 0; z < c; z++) {
        if (!obstacleMap[(x + dx[di]) + ',' + (y + dy[di])]) {
          x += dx[di]
          y += dy[di]
          res = Math.max(res, x * x + y * y)
        }
      }
    }
  })
  return res
};
// @lc code=end

