子组件想修改父组件传来的值（props中的值）。普通的修改会报错，因为这个值是单向的，只能传进来，要是想修改就要用v-model

解决办法
- v-model
- .sync 修饰符


v-model
---
父组件
```
<template>
    <div>
        <PropsChild v-model="contentData"></PropsChild>
		// 一个组件上的 v-model默认对应其子组件的props的value
    </div>
</template>
<script>
    import PropsChild from './component/PropsChild.vue'
    export default {
        data() {
            return {
                contentData:'我是父组件的数据********'
            }
        },
        components:{PropsChild}
    }
</script>
```

子组件
```
<template>
    <div>
        <div>我是子组件，==》 父组件传递过来的数据 {{ handlerContent }}</div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                handlerContent: this.value,
            }
        },
        props:['value'],
        mounted() {
            this.handlerContent = '子组件在mounted生命周期修改'
        },
    }
</script>
```


.sync
--- 

父组件
```
<template>
    <div>
        <PropsChild v-bind:content.sync="parentContent"></PropsChild>
        <!-- 给v-bind添加了sync，那么子组件中就有一个事件可以触发 update:xxx自定义事件并且传递要修改的值 -->
    </div>
</template>
<script>
    import PropsChild from './component/PropsChild.vue'
    export default {
        data() {
            return {
                parentContent:'我是父组件的数据********'
            }
        },
        components:{
            PropsChild
        }
    }
</script>
```

子组件
```
<template>
    <div>
        <button @click="btnTest">我是子组件，{{ lasterContent }}</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                lasterContent: this.content
            }
        },
        props:{
            content:{
                type:String
            }
        },
        watch: {
            content(val) {
                this.lasterContent = val;
            }
        },
        methods: {
            btnTest() {
                this.lasterContent = '哈哈，在子组件中改变了父组件传递过来的数据';
                this.$emit('update:content',this.lasterContent);
            }
        },
    }
</script>
```