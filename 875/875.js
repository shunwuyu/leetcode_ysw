// 尝试一下 暴力 再优化
/**
 * 
 * @param {number[]} piles 
 * @param {number} H
 * @return {number} 
 */
var minEatingSpeed = function(piles, H) {
  let lo = 1,
    hi = Math.max(...piles);
  console.log(lo, hi);
  // 求出最大香蕉数，在某把中
  return lo;
}

minEatingSpeed([3, 6, 7, 11], 8);