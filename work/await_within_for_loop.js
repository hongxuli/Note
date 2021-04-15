async function asyncForEach(array, callback ) {
    for (let index = 0; index < array.length; index++) {
        const result  = await callback(array[index]);
        console.log('result'+result);
    }
    console.log('outside of forloop');
}





async function main (){
    console.log('start');

    var receipts = [0,1];
    var callback = function (num){
        return new Promise((res,rej) =>{
            console.log(`start of promise ${num}`);
            setTimeout(()=>{
                res(num);
                console.log(num);
            },2000);
            console.log(`end of promise ${num}`);
        })
    }
    await asyncForEach(receipts, callback)

    console.log('end');

}

main()