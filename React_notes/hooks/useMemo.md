
memoization 的基本想法


提高fibonacci的性能
``` JS
// 一个简单的实现
function memoize(fn) {
    return function () {
        var args = Array.prototype.slice.call(arguments)
        fn.cache = fn.cache || {};
        return fn.cache[args] ? fn.cache[args] : (fn.cache[args] = fn.apply(this,args))
    }
}


function fibonacci(num) {
    if (num == 1 || num == 2) {
        return 1
    }
    return fibonacci(num-1) + fibonacci(num-2)
}

const memFib = memoize(fibonacci)
console.log('profiling tests for fibonacci')
console.time("non-memoized call")
console.log(memFib(6))
console.timeEnd("non-memoized call")
console.time("memoized call")
console.log(memFib(6))
console.timeEnd("memoized call")
```


useMemo 的源码
``` JS
//react/packages/react-reconciler/src/ReactFiberHooks.js
export function useMemo<T>(
  nextCreate: () => T,
  inputs: Array<mixed> | void | null,
): T {
  currentlyRenderingFiber = resolveCurrentlyRenderingFiber(); //返回一个变量
  workInProgressHook = createWorkInProgressHook(); // 返回包含memoizedState的hook对象

  const nextInputs =
    inputs !== undefined && inputs !== null ? inputs : [nextCreate]; // 需要保存下来的inputs，用作下次取用的key

  const prevState = workInProgressHook.memoizedState; // 获取之前缓存的值
  if (prevState !== null) {
    const prevInputs = prevState[1];
    // prevState不为空，并且取出上次存的`key`, 然后下面判断(前后的`key`是不是同一个)，如果是就直接返回，否则继续向下
    if (areHookInputsEqual(nextInputs, prevInputs)) {
      return prevState[0];
    }
  }

  const nextValue = nextCreate(); //执行useMemo传入的第一个参数(函数)
  workInProgressHook.memoizedState = [nextValue, nextInputs]; // 存入memoizedState以便下次对比使用
  return nextValue; 
}
```
进行了缓存(workInProgressHook.memoizedState就是hook返回的对象并且包含memoizedState，进行对比前后的inputs是否相同,然后再次进行操作)，并且支持传递第二个数组参数作为key。