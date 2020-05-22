// 给定一个包含 n 个整数的数组nums，判断 nums 中是否存在三个元素a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。


function threeSum(nums){
    let result = []
    nums.sort((a,b)=> a-b )
    for(let i =0;i<nums.length;i++){
        let left = i+1
        let right = nums.length-1

        while(left<right){
            let sum = nums[i]+nums[left]+nums[right]
            if (sum ===0) {
                result.push([nums[i], nums[left],nums[right]])
                left++
                right--
            }else if(sum<0){
                left++
            }else if(sum>0){
                right--
            }
            while(nums[left]===nums[left-1]){
                left++
            }
            while(nums[right]===nums[right+1]){
                right--
            }
            
        }
    }
    return result
} 