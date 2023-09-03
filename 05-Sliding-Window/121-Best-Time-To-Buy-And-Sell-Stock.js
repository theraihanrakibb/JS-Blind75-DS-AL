/**
 * @param {number[]} prices
 * @return {number}
 */

// ? T: o(n)
// ! S : O(1)

const maxProfit = function (prices) {
  let curMin = prices[0];
  let curMax = 0;

  for (let i = 1; i < prices.length; i++) {
    curMin = Math.min(prices[i], curMin);
    curMax = Math.max(curMax, prices[i] - curMin);
  }
  return curMax;
};
