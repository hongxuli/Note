``` JS
{
  "plugins": [
    [
      "transform-runtime",
      {
        "polyfill": false
      }
    ]
   ],
  "presets": [
    [
      "es2015",
      {
        "modules": false
      }
    ],
    "stage-2",
    "react"
  ]
}
```


### plugin 

    plugin 告诉Babel要使用哪些插件，这些插件可以控制如何转换代码。

    以上配置文件里的 transform-runtime 对应的插件全名叫做 babel-plugin-transform-runtime
    
    babel-plugin-transform-runtime 是一个官方插件，用来减少冗余代码。

    同时需要注意的是由于 babel-plugin-transform-runtime 注入了 require('babel-runtime/helpers/_extent') 语句到编译后的代码里，需要安装 babel-runtime 依赖到你的项目后，代码才能正常运行。 也就是说 babel-plugin-transform-runtime 和 babel-runtime 需要配套使用，使用了 babel-plugin-transform-runtime 后一定需要 babel-runtime。

### presets 

    presets 告诉Babel 要转换的源码里使用了哪些新的语法特性，每个presets对于一组新语法特性提供支持，可以多个叠加。

    presets 通常可以分为三大类

    1.已经被写入 ECMAScript 标准里的特性 (可细分为)

    - es2015 包含在2015里加入的新特性；
    - es2016 包含在2016里加入的新特性；
    - es2017 包含在2017里加入的新特性；
    - env 包含当前所有 ECMAScript 标准里的最新特性。(包含上述全部)

    2.被社区提出来的，但是还没被写入ECMAScript 标准里的特性

    - stage0 只是一个美好激进的想法，有 Babel 插件实现了对这些特性的支持，但是不确定是否会被定为标准；
    - stage1 值得被纳入标准的特性；
    - stage2 该特性规范已经被起草，将会被纳入标准里；
    - stage3 该特性规范已经定稿，各大浏览器厂商和 Node.js 社区开始着手实现；
    - stage4 在接下来的一年将会加入到标准里去。

    3.为了支持一些特定场景下的语法，和ECMAScript没有关系的。例如 babel-preset-react 是为了支持REACT开发的JSX语法

    