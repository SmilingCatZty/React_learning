import React, { useState } from 'react'
import { Button, Select } from 'antd'

const Count = React.forwardRef((props, ref) => {
  let selectNumber: number = 1 // 定义select选中的结果
  const [count, setCount] = useState(0) // 数量

  // 加
  const increment = () => {
    setCount(() => count + selectNumber)
  }
  // 减
  const decrement = () => {
    setCount(() => count - selectNumber)
  }
  // 如果为奇数则加
  const incrementIfOdd = () => {
    if (selectNumber % 2 !== 0) {
      setCount(() => count + selectNumber)
    }
  }
  // 如果为异步则加
  const incrementIfAsync = () => {
    setTimeout(() => {
      setCount(() => count + selectNumber)
    }, 500);
  }

  const handleChange = (v: any) => {
    selectNumber = v
  }

  return (
    <div>
      <h1>当前求和为: {count}</h1>
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