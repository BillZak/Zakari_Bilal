function getSecondLargest(nums) {
  var largest = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > largest) largest = nums[i];
  }
  var large;

  for (let j = 0; j < nums.length; ++j) {
    if (nums[j] !== largest) {
      large = nums[j];
      break;
    }
  }
  for (let j = 1; j < nums.length; ++j) {
    if (large < nums[j] && nums[j] != largest) large = nums[j];
    else console.log(large);
  }
  return large;
}

var secondLargest = getSecondLargest([34, 56, 45, 23, 1]);

console.log("Second largest number:", secondLargest);
