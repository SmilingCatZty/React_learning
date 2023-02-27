// import React, { useEffect } from 'react'
import { Button, Select } from 'antd'
import { useState, useEffect } from './index.module'

// let selectNumber: number = 1 // 定义select选中的结果

const Count = ((props: any) => {
  const [count, setCount] = useState(0) // 数量
  const [selectNumber, setSelectNumber] = useState(1)

  // useEffect(() => {
  //   // 检测redux中状态的变化，只要变化，就调用redux
  // })

  const [name1, setName1] = useState('KaSong');
  useEffect(() => console.log('谁在那儿！', name1()))
  // 打印： 谁在那儿！KaSong
  setName1('KaKaSong');
  // 打印： 谁在那儿！KaKaSong

  // 加
  const increment = () => {
    console.log('count: ', count());
    console.log('setSelectNumber: ', selectNumber());


    setCount(count() + selectNumber())
    console.log('sum: ', count());

    // setCount(()=>count() + selectNumber())
  }

  // 减
  const decrement = () => {
    // setCount(() => count() - selectNumber())
  }

  const handleChange = (v: any) => {
    console.log(setSelectNumber(v));
    console.log(selectNumber());

  }

  return (
    <div>
      <h2>我是count组件</h2>
      <h3>当前求和为: {count()}</h3>
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
    </div>
  )
})

export default Count
