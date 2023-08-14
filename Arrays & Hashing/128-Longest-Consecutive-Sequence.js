const longestConsecutive = function() {
  let set = new Set(nums);
  let streak = 0;

  for(let num of set) {
    if(set.has(num - 1)) continue;
    let currStreak = 1;

    while(set.has(num + 1)) {
      currStreak += 1;
      num += 1;
    }
    streak = Math.max(streak,currStreak);
  }
  return streak;

};

// Time Complexity:  o(n^2)
// Space Complexity: o(n^2)s