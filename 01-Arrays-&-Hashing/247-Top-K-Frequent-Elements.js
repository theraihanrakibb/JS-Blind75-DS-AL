// 347
const topKFrequent = function (nums, k) {

	let map = {};
	let bucket = [];
	let result = [];

	for (let i = 0; i<nums.length; i++) { // frqurency map
		 if ([!map[nums[i]]]) {
				map[nums[i]] = 1;
		 } else {
				map[nums[i]]++;
		 }
	}
	for (let [num, freq] of Object.entries(map)) {
		 if (!bucket[freq]) {
				bucket[freq] = new Set().add(num);
		 } else {
				bucket[freq] = bucket[freq].add(num);
		 }

	}
	for (let i = bucket.length - 1; i>= 0; i--) {
		 if (bucket[i]) result.push(...bucket[i]);
		 if (result.length === k) break;
	}
	return result;
};

// Time Complexity = k(log n) - given
// My Time & Space Complexity = o(n), I used bucket sort