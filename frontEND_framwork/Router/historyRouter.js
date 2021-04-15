/*
1.创建一个路由对象, 实现 register 方法用于注册每个 location.pathname 值对应的回调函数
2.当 location.pathname === '/' 时，认为是首页，所以实现 registerIndex 方法用于注册首页时的回调函数
3.解决 location.path 没有对应的匹配，增加方法 registerNotFound 用于注册默认回调函数
4.解决注册的回到函数执行时出现异常，增加方法 registerError 用于处理异常情况
5.定义 assign 方法，用于通过 JS 触发 history.pushState 函数
6.定义 replace 方法，用于通过 JS 触发 history.replaceState 函数
7.监听 popstate 用于处理前进后退时调用对应的回调函数
8.全局阻止A链接的默认事件，获取A链接的href属性，并调用 history.pushState 方法
9.定义 load 方法，用于首次进入页面时 根据 location.pathname 调用对应的回调函数
*/


class HistoryRouter{
    
    constructor(){
        //用于存储不同path值对应的回调函数
        this.routers = {};
        this.listenPopState();
        this.listenLink();
    }
    //监听popstate
    listenPopState(){
        window.addEventListener('popstate',(e)=>{
            let state = e.state || {},
                path = state.path || '';
            this.dealPathHandler(path)
        },false)
    }
    //全局监听A链接
    listenLink(){
        window.addEventListener('click',(e)=>{
            let dom = e.target;
            if(dom.tagName.toUpperCase() === 'A' && dom.getAttribute('href')){
                e.preventDefault()
                this.assign(dom.getAttribute('href'));
            }
        },false)
    }
    //用于首次进入页面时调用
    load(){
        let path = location.pathname;
        this.dealPathHandler(path)
    }
    //用于注册每个视图
    register(path,callback = function(){}){
        this.routers[path] = callback;
    }
    //用于注册首页
    registerIndex(callback = function(){}){
        this.routers['/'] = callback;
    }
    //用于处理视图未找到的情况
    registerNotFound(callback = function(){}){
        this.routers['404'] = callback;
    }
    //用于处理异常情况
    registerError(callback = function(){}){
        this.routers['error'] = callback;
    }
    //跳转到path
    assign(path){
        history.pushState({path},null,path);
        this.dealPathHandler(path)
    }
    //替换为path
    replace(path){
        history.replaceState({path},null,path);
        this.dealPathHandler(path)
    }
    //通用处理 path 调用回调函数
    dealPathHandler(path){
        let handler;
        //没有对应path
        if(!this.routers.hasOwnProperty(path)){
            handler = this.routers['404'] || function(){};
        }
        //有对应path
        else{
            handler = this.routers[path];
        }
        try{
            handler.call(this)
        }catch(e){
            console.error(e);
            (this.routers['error'] || function(){}).call(this,e);
        }
    }
}
