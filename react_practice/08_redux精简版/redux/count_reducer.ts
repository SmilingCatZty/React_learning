/**
 * 1、该文件用于创建一个为count组件服务的reducer
 * 2、reducer的本质就是一个函数
 * 3、reducer会接收到两个函数，之前的状态：previousStatus和 动作对象：action
 */

const initState: number = 0
const countReducer = (preState: number = initState, action: any) => {
  // 从action中获取type、data
  const { type, data } = action
  switch (type) {
    case 'increment': // 加      
      return preState + data.value

    case 'decrement': // 减
      return preState - data.value

    case 'incrementIfOdd': // 奇数加
      return preState + data.value

    case 'incrementIfAsync': // 异步加
      return preState + data.value
    default:
      return preState
  }
}


export default countReducer