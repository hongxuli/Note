
为什么会造成死循环
 ` <IconButton onClick={toggleSlider("sliderShow", true)}>`
 注意toggleSlider后面加了(), 返回的是执行后的函数
```JS
const NavBar = () => {

    const [state, setState] = useState({
        sliderShow: false
    })

    // function toggleSlider(slider, open){

    //      return function (e) { 
    //          setState({ ...state, [slider]: open });
    //       }
    //  }
    //  function toggleSlider(slider, open) {
    //    return  setState({ ...state, [slider]: open });
      
    //  } 

    const toggleSlider = (slider, open)=>() =>{
        setState({...state, [slider]:open})
    }


    const sideList = (slider) => (
      <Box component="div" className={classes.menuSliderContainer}>
        <List>
          {menuItems.map((item, key) => (
            <ListItem button key={key}>
              <ListItemIcon className={classes.ListItem}>
                {item.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.ListItem}
                primary={item.listText}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    )

    return (
      <div>
        <Box component="nav">
          <AppBar position="static" style={{ background: "#222" }}>
            <Toolbar>
            <!-- 这里{}里的函数会在render 后执行 所以得惰性返回一个函数  一个闭包 -->
              <IconButton onClick={toggleSlider("sliderShow", true)}>
                <ArrowBack style={{ color: "tomato" }}></ArrowBack>
              </IconButton>
              <Typography variant="h5" style={{ color: "tan" }}>
                Protfolio
              </Typography>
              <MobilRightMenuSlider open={state.sliderShow}>
                {sideList("slider")}
              </MobilRightMenuSlider>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
}
```


```

    <!-- curried     -->
    const toggleSlider = (slider, open)=> () =>{
        setState({...state, [slider]:open})
    }
    <!-- rewrite -->
    <!-- 这里因为柯里化  惰性返回的是一个函数  这个函数接受(event) 是一个闭包 可以被调用执行 setState  -->
     function toggleSlider(slider, open){

         return function (e) { 
             setState({ ...state, [slider]: open });
          }
     }



     const toggleSlider = (slider, open) =>{
        setState({...state, [slider]:open})
    }

    <!-- rewrite -->
    <!-- 这里的函数在render的时候会直接执行  所以会导致死循环 -->
     function toggleSlider(slider, open) {
       return  setState({ ...state, [slider]: open });
      
     }

  

```
