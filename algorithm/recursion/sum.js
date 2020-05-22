 function  sum (arr) {
    // base
    if(arr.length === 0 ){
        return 0
    }

    if(arr.length === 1){
        return arr[0]
    }

    return arr.pop() + sum(arr)

}


console.log(sum([1,2,3,4]));
