
const effectStack = [] as any  // 当前正在执行effect的栈

const useState = (value: any) => {
  // 每个useState内部有个集合subs，用来保存「订阅该state变化」的effect。
  const subs = new Set() as any
  // 调用getter时获取当前上下文的effect，建立关系
  const getter = () => {
    // 获取当前上下文的effect
    const effect = effectStack[effectStack.length - 1];
    if (effect) {
      // 建立联系
      subscribe(effect, subs);
    }
    return value
  }
  // 调用setter时通知所有订阅该state变化的effect回调执行
  const setter = (newValue: any) => {
    value = newValue
    // 通知所有订阅该state变化的effect回调执行
    for (const sub of [...subs]) {
      sub.execute();
    }
  }

  return [getter as any, setter as any]
}

/**
 * useEffect 功能介绍
 * 每次useEffect回调执行前重置依赖（回调内部state的getter会重建依赖关系）
 * 回调执行时确保当前effect处在effectStack栈顶
 * 回调执行后将当前effect从栈顶弹出
 */
const useEffect = (callback: any) => {
  const execute = () => {
    // 重置依赖
    cleanup(effect);
    // 推入栈顶
    effectStack.push(effect);

    try {
      callback();
    } finally {
      // 出栈
      effectStack.pop();
    }
  }
  /**
 * @effect 是每个useEffect对应的数据结构：
 * @execute 该useEffect的回调函数
 * @deps 该useEffect依赖的state对应subs的集合
 */
  const effect = {
    execute,
    deps: new Set()
  }
  // 立刻执行一次，建立依赖关系
  execute()

}

function subscribe(effect: any, subs: any) {
  // 订阅关系建立
  subs.add(effect);
  // 依赖关系建立
  effect.deps.add(subs);
}

// cleanup用来移除该effect与所有他依赖的state之间的联系
function cleanup(effect: any) {
  // 将该effect订阅的所有state变化移除
  for (const dep of effect.deps) {
    dep.delete(effect);
  }
  // 将该effect依赖的所有state移除
  effect.deps.clear();
}


export {
  useState,
  useEffect
}