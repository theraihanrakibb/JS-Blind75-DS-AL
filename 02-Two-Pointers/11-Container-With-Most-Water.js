/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maximum = 0;

  while(left < right) {
    let width = (right - left)

    let maxArea = Math.min(height[left], height[right]) * width;

    maximum = Math.max(maximum, maxArea);

    if(height[left] <= height[right]) {
      left ++;
    }else{
      right --;
    }
  }
  return maximum;
};
// Time Complexity = O(N)
// Space Complexity = O(1)
