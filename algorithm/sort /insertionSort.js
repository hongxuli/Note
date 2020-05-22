function insertionSort (arr) { 
    if (arr.length<=1 || !Array.isArray(arr)) return 

    for(let i =1; i<arr.length; i++){  //从第二个开始

        let temp = arr[i] // 从数组中提出当前数字
        let j = i

        // 比较 i 之前(排过序的) 如果小于之前的就把前一个往后移一个 
        while(j-1>=0 && arr[j-1]>arr[j]){
            arr[j] =arr[j-1]
            j--
        }
        // 找到要插入的位置
        arr[j] = temp
    }

    return arr
 }


 /* 
当排序序列为已排序序列时，为最好的时间复杂度 O(n)。

插入排序的平均时间复杂度为 O(n²) ，最坏时间复杂度为 O(n²) ，空间复杂度为 O(1) ，是稳定排序。
 */