const containsDuplicate =  function(nums){

  let set = new Set(nums); // Set = it's alway pass unique values

  return set.size !== nums.length;

};
  //Time: o(n), Space:o(n)
