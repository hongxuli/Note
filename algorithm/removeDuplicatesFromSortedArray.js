// var removeDuplicates = function(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let repeat = 0;
//     if (i == nums.length-1) break
//     for (let j = i + 1; j < nums.length; j++) {
//         if (j==nums.length-1) {
//             if (nums[j] === nums[i]){
//                 nums.splice(i + 1, repeat+1);
//             }else{
//                 nums.splice(i + 1, repeat);
//             }
//             break
//         }
//         if (nums[j] !== nums[i]) {
//             nums.splice(i + 1, repeat);
//             break;
//         } else {
//             repeat++;
//         }
//     }
//   }
//   return nums.length;
// };



var removeDuplicates = function(nums) {
  let i = 0;
  let j = 1;
  for (; j < nums.length; j += 1) {
    if (nums[j] !== nums[i]) {
      i += 1;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};

var nums = [1, 1,1];
removeDuplicates(nums);
console.log(nums);
