import React, { useEffect, useState } from 'react'
import { Button, Select } from 'antd'
// 引入CountUI组件
// import CountUI from '../../components/Count/index'
// 引入connect，用于连接UI与redux
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementIfAsyncAction } from '../../redux/actions/count'

let selectNumber: number = 1 // 定义select选中的结果

const Count = ((props: any) => {
  const [, setCount] = useState(0) // 数量

  useEffect(() => {
    // 检测redux中状态的变化，只要变化，就调用redux
    setCount(() => setCount(0) as any)
  }, [])

  // 加
  const increment = () => props.jia(selectNumber)

  // 减
  const decrement = () => props.jian(selectNumber)
  // 如果为奇数则加
  const incrementIfOdd = () => {
    if (props.count % 2 !== 0) {
      props.jia(selectNumber)
    }
  }
  // 如果为异步则加
  const incrementIfAsync = () => props.jiaAsync(selectNumber, 500)

  const handleChange = (v: any) => selectNumber = v

  return (
    <div>
      <h2>我是count组件</h2>
      <h3>当前求和为: {props.count}</h3>
      <h3>下方人数共:{props.personNumber}人</h3>
      <Select defaultValue={selectNumber}
        options={
          [
            { value: 1, label: 1 },
            { value: 2, label: 2 },
            { value: 3, label: 3 },
          ]
        }
        onChange={handleChange}>
      </Select>&nbsp;
      <Button onClick={() => increment()}> + </Button>&nbsp;
      <Button onClick={() => decrement()}> - </Button>&nbsp;
      <Button onClick={() => incrementIfOdd()}>当前求和为奇数再加</Button>&nbsp;
      <Button onClick={() => incrementIfAsync()}>异步加</Button>
    </div>
  )
})
// 创建一个count的容器组件
// const countContainer = connect(mapStateToPorps, mapDispatchToProps)(CountUI)
// 框架层面的优化，api内部帮忙封装了dispatch
const countContainer = connect(
  (state: any) => ({ count: state.Count, personNumber: state.Person.length }),
  {
    jia: (value: number) => createIncrementAction({ value }),
    jian: (value: number) => createDecrementAction({ value }),
    jiaAsync: (value: number, time: number) => createIncrementIfAsyncAction({ value }, time)
  }
)(Count)


export default countContainer
