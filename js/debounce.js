function debounce (func, interval){
    let timeout 

    return () =>{
        let later = function (){
            timeout  = null 
            func()
        }
        clearTimeout(timeout);
        timeout = setTimeout(later, interval )
    }
}


function throttle (func, interval){
    let timeout 
    return ()=>{
       
        let later = function (){
            timeout = false
        }
        if(!timeout){
            func()
            timeout = true
            setTimeout(later, interval)
        }
    }
}