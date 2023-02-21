import React, { useEffect, useState } from 'react'
import { Button, Select } from 'antd'
// 用于获取redux中保存的状态
import store from '../../redux/store'
import { createDecrementAction, createIncrementAction, createIncrementIfAsyncAction } from '../../redux/count_action'
// import { INCREMENT, DECREMENT, INCREMENTIFODD, INCREMENTIFASYNC } from '../../redux/constant'

let selectNumber: number = 1 // 定义select选中的结果

const Count = (() => {
  const [, setCount] = useState(0) // 数量

  useEffect(() => {
    // 检测redux中状态的变化，只要变化，就调用redux
    store.subscribe(() => {
      setCount(() => setCount(0) as any)
    })
  })

  // 加
  const increment = () => {
    // 通知redux+value
    store.dispatch(createIncrementAction({ value: selectNumber }))
  }
  // 减
  const decrement = () => {
    store.dispatch(createDecrementAction({ value: selectNumber }))
  }
  // 如果为奇数则加
  const incrementIfOdd = () => {
    if (store.getState() % 2 !== 0) {
      store.dispatch({ type: 'incrementIfOdd', data: { value: selectNumber } })
    }
  }
  // 如果为异步则加
  const incrementIfAsync = () => {

    store.dispatch(createIncrementIfAsyncAction({ value: selectNumber }, 500))

  }

  const handleChange = (v: any) => {
    selectNumber = v
  }

  return (
    <div>
      <h1>当前求和为: {store.getState()}</h1>
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
export default Count 