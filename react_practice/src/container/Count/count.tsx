// 引入CountUI组件
import CountUI from '../../components/Count/index'
// 引入connect，用于连接UI与redux
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementIfAsyncAction } from '../../redux/count_action'

/**
 * 1、'mapStateToPorps'的返回值是一个对象
 * 2、'mapStateToPorps'函数返回的对象中的key作为给ui组件props的key，value作为传递给ui组件props的value -- 状态
 * 3、'mapStateToPorps'用于传递状态
 */
const mapStateToPorps = (state: any) => {
  return { count: state }
}
/**
 * 1、'mapDispatchToProps'的返回值是一个对象
 * 2、'mapDispatchToProps'函数返回的对象中的key作为给ui组件props的key，value作为传递给ui组件props的value -- 操作的方法
 * 3、'mapDispatchToProps'用于传递状态的方法
 */
const mapDispatchToProps = (dispatch: any) => {
  return {
    jia: (value: number) => dispatch(createIncrementAction({ value })), // 加法操作
    // dispatch({ type: INCREMENT, data: { value: number } })
    jian: (value: number) => dispatch(createDecrementAction({ value })), // 减法操作
    // dispatch({ type: DECREMENT, data: { value: number } })
    jiaAsync: (value: number, time: number) => dispatch(createIncrementIfAsyncAction({ value }, time))
  }
}

// 创建一个count的容器组件
const countContainer = connect(mapStateToPorps, mapDispatchToProps)(CountUI)

/**
 * 框架层面的优化，api内部帮忙封装了dispatch
  const countContain = connect(
    state => ({ count: state }),
    dispatch => ({
      jia: createIncrementAction,
      jian: createDecrementAction,
      jiaAsync: createIncrementIfAsyncAction
    })
  )
*/


export default countContainer