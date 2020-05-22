class Vue {

    constructor(data){
        this.finish = data.finish
        this.orderid = data.orderid
    }

  changeOrderStateRemotely(SucCallBack){

    setTimeout(  (res="res") => {
            SucCallBack(res)
        }, 2000);
    
}


 hanlder(){
    let _self = this
    let id = this.orderid
    switch(_self.finish){
        case "已完成":
            let SucCallBack = function (res) {
                console.log(res);
                console.log(id);  
              }
            _self.changeOrderStateRemotely(SucCallBack);
            break
        default:
            console.log('?');   
    }

}

}
var data = {
    finish : "已完成",
    orderid : 1234
}
var test = new Vue(data);

test.hanlder()