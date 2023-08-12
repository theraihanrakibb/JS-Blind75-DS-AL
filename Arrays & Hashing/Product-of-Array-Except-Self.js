const productExceptSelf = (nums) =>{
  //let forwardArr= [];
  let reverseArr = [];
  let start = 1;

  for(let i=0; i<nums.length; i +=1){
    reverseArr.push(start);
    //forwardArr.push(start);
    start = start*nums[i];
  }

  //let reverseArr = [];
  let start2 = start = 1;

  for(let i= nums.length -1; i >= 0; i--){
    //reverseArr.unshift(start2*forwardArr[i]);
    reverseArr[i] = start2 * reverseArr[i];
    start2 = start2 * nums[i];
  }
  return reverseArr;

};

// Time Conplexity: O(n) // if we use  forwaedArry else : O(1)
// Space Conplexity: O(n + m)