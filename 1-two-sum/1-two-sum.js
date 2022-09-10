/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
      
    //calculate the remainder w/ each number
    let remainder = target - nums[i];
      
    //check if correct remainder is in hashmap
    if (remainder in hashMap) {
      return [hashMap[remainder], i];
    }
      
    //store array of [interger,i] 
    hashMap[nums[i]] = i;
      
  }
}

