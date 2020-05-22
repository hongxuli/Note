// recursion 
const BSerach = function (array, target){
    let low = 0 
    let high = array.length-1
    let mid = Math.round((low + high)/2)
    let result = loop()
    
    function loop () {  
    if (target == array[mid]) {
      
        return mid
    }
    
    if (array[mid] < target) {
      
      low = mid+1;
      mid = Math.round((low + high) / 2);
      return loop();
    } else {
      high = mid-1;
      mid = Math.round((low + high) / 2);
      return loop();
    }
    } 
   
    return result; 
}


// const BSerach = function (array, target) {
//   let low = 0;
//   let high = array.length - 1;
//   let mid = Math.round((low + high) / 2);
//   let result;

//   loop();

//   function loop() {
//     if (target == array[mid]) {
//       result = mid;
//       return;
//     }

//     if (array[mid] < target) {
//       low = mid + 1;
//       mid = Math.round((low + high) / 2);
//       loop();
//     } else {
//       high = mid - 1;
//       mid = Math.round((low + high) / 2);
//       loop();
//     }
//   }

//   return result;
// };







const BSerach2 = function (array, target){ 
    let low = 0 
    let high = array.length-1

    while (low <= high){
        mid = Math.round((low + high) / 2);

        if(target == array[mid]){
            return mid
        }
        if (array[mid] < target) {
      
        low = mid+1;
       
        } else {

        high = mid-1;

        }
    }
    return null
 }


 console.log(BSerach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 6));