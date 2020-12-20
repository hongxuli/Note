function bubbleSort(arr) {
    let out
    let inner
    let swap
    for( out = 0; out < arr.length-1; out++){

        for( inner = out+1; inner>=1; inner --)
        if(arr[inner]<arr[inner-1]){
            swap = arr[inner]
            arr[inner] = arr[inner-1]
            arr[inner-1] = swap
        } 
    }
    return arr
}


var array = [5,2,1,4,5,8]


console.log(bubbleSort(array));


/*
冒泡排序有两种优化方式。

一种是外层循环的优化，我们可以记录当前循环中是否发生了交换，如果没有发生交换，则说明该序列已经为有序序列了。 因此我们不需要再执行之后的外层循环，此时可以直接结束。

一种是内层循环的优化，我们可以记录当前循环中最后一次元素交换的位置，该位置以后的序列都是已排好的序列，因此下 一轮循环中无需再去比较。

优化后的冒泡排序，当排序序列为已排序序列时，为最好的时间复杂度为 O(n)。

冒泡排序的平均时间复杂度为 O(n²) ，最坏时间复杂度为 O(n²) ，空间复杂度为 O(1) ，是稳定排序。
*/