/**
 * 1、该文件为count创建一个atcion对象
 * 2、reducer的本质就是一个函数
 * 3、reducer会接收到两个函数，之前的状态：previousStatus和 动作对象：action
 */
import { INCREMENT, DECREMENT, INCREMENTIFODD, INCREMENTIFASYNC } from './constant'

// 加
// const createIncrementAction = (data: any) => {
//   return { type: 'increment', data }
// }
const createIncrementAction = (data: any) => ({ type: INCREMENT, data })  // 返回一个对象，简写形式

// 减
// const createDecrementAction = (data: any) => {
//   return { type: 'decrement', data }
// }
const createDecrementAction = (data: any) => ({ type: DECREMENT, data })  // 返回一个对象，简写形式

const createIncrementIfOddAction = (data: any) => ({ type: INCREMENTIFODD, data })  // 返回一个对象，简写形式

const createIncrementIfAsyncAction = (data: any) => ({ type: INCREMENTIFASYNC, data })  // 返回一个对象，简写形式


export {
  createIncrementAction,
  createDecrementAction,
  createIncrementIfOddAction,
  createIncrementIfAsyncAction
}