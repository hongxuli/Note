// // 

   function FindContinuousSequence(sum) {
      const result = [];
      const child = [1, 2];
      let big = 2;
      let small = 1;
      let currentSum = 3;
      while (big < sum) {
        while (currentSum < sum && big < sum) {
          child.push(++big);
          currentSum += big;
        }
        while (currentSum > sum && small < big) {
          child.shift();
          currentSum -= small++;
        }
        if (currentSum === sum && child.length > 1) {
          result.push(child.slice());
          child.push(++big);
          currentSum += big;
        }
      }
      return result;
    }

//     function FindContinuousSequence(target){
//     let nums = []
//     let max = Math.round(target / 2);

    // function getSum(arr) {      //change to return sum = (arr[0]+arr[length-1])*arr.length/2
//         let sum=0
//       for (x = 0; x < arr.length; x++) {
//         sum += arr[x];
//       }
//       return sum
//     }
//     for(let i=1; i<=max ; i++){
//         nums.push(i)
//     }

//     let finalArry =[]

//     for(let j=0;j<nums.length-1;j++){
//         let result = [nums[j]]
//         let sum = nums[j];
//         for(let k=j+1; k<nums.length;k++){
            
//             if (sum < target) {
//               result.push(nums[k]);
//               sum = getSum(result);
//               if (sum === target) finalArry.push(result);
//             }
//         }
        

        
//     }
//     return finalArry
// }

var x = FindContinuousSequence(10)
console.log(x);
