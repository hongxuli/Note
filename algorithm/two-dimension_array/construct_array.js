// 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],
// 其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。

// if divide was allowed, we can simply use forloop, get the product of the A then
// divide the A[i]

// since divide is not allowed, we can image the array B as a matrix
// B0 =  1 A1 A2 A3 A4
// B1 = A0  1 A2 A3 A4
// B2 = A0 A1  1 A3 A4
// B3 = A0 A1 A2  1 A4
// B4 = A0 A1 A2 A3  1

// calculate the upper triangle and lower triangle separately 

function Result (A){
    const result=[]
    if(Array.isArray(A) && A.length>0){
        result[0] = 1;

        for(let i=1;i<A.length;i++){
            result[i] = result[i-1] * A[i-1]
        }

        let temp = 1
        for(let j=A.length-2;j>=0;j--){
            temp *= A[j+1] 
            result[j] *= temp 
        }
    }
    return result
}