https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html

- mixin会导致依赖不明确
mixin会调用组件内部方法/数据，组件会调用mixin方法/数据, 无法保证双方方法稳定存在.
多个mixin同时作用时，依赖关系对于被mixin的组件来说会更困惑
Mixins将会修改state，所以开发者无法直接的确定state来自哪里，如果使用多个Mixins更甚

- mixin会导致命名冲突
多个mixin和组件本身，方法名称会有命名冲突风险，如果遇到了，不得不重命名某些方法

- mixin会带来滚雪球般的复杂度
-----
- ES6 classes. They don’t support mixins.
- Indirection. Mixins that modify state make it tricky to tell where that state is coming from, especially when there’s more than one mixin.
- Naming collisions. Two mixins that try to update the same piece of state may overwrite one another. The createClass API included a check that would warn you if two mixins had a getInitialState value with the same keys, but it wasn’t airtight.