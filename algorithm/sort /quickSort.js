// function quickSort(arr) {
//     if(arr.length < 2){
//         return arr
//     }else{
//         let pivot = arr[0]
//         let less=[], greater=[],result = []
//         // 注意从 pivot 后面开始 不要把 pivot 加进去
//         for(let i=1; i<arr.length;i++){
//             if(arr[i]<=pivot){
//                 less.push(arr[i])
//             }else{
//                 greater.push(arr[i]);
//             }
//         }
//        return  result.concat(quickSort(less),pivot,quickSort(greater)) 
//     }


// }








// function quickSort(arr, left, right) {

//     if(left<right){
//         handleProvit(arr ,left, right)

//         let provit = right -1 
//         let i = left 
//         let j = right -1
//     }


//     handleProvit(arr, left, right){
//         let mid = Math.round((left+right)/2)
//         if(arr[left] > arr[mid]){
//             swap(arr, left, mid)
//         }
//         if(arr[left] > arr[right]){
//             swap(arr, left, right)
//         }
//         if(arr[mid] > arr[right]){
//             swap(arr, mid, right)
//         }
//         swap(arr, right-1, mid)
//     }

//     swap(arr, a, b){
//         let temp = arr[a]
//         arr[a] = arr[b]
//         arr[b] = temp
//     }
// }






function quickSort(array, start, end) {
  let length = array.length;


  // 如果不是数组或者数组长度小于等于1，直接返回，不需要排序
  if (!Array.isArray(array) || length <= 1 || start >= end) return;

  let index = partition(array, start, end); // 将数组划分为两部分，并返回右部分的第一个元素的索引值

  quickSort(array, start, index - 1); // 递归排序左半部分
  quickSort(array, index + 1, end); // 递归排序右半部分
}

function partition(array, start, end) {
  let pivot = array[start]; // 取第一个值为枢纽值，获取枢纽值的大小

  // 当 start 等于 end 指针时结束循环
  while (start < end) {
    // 当 end 指针指向的值大等于枢纽值时，end 指针向前移动
    while (array[end] >= pivot && start < end) {
      end--;
    }

    // 将比枢纽值小的值交换到 start 位置
    array[start] = array[end];

    // 移动 start 值，当 start 指针指向的值小于枢纽值时，start 指针向后移动
    while (array[start] < pivot && start < end) {
      start++;
    }

    // 将比枢纽值大的值交换到 end 位置，进入下一次循环
    array[end] = array[start];
  }

  // 将枢纽值交换到中间点
  array[start] = pivot;

  // 返回中间索引值
  return start;
}


var a = [ 4, 5, 7, 8, 1, 2,3,6];
var len = a.length
quickSort(a, 0, len-1)
console.log(a);

