import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Input, Button } from 'antd';
import { createAddPerson } from '../../redux/actions/person'
import { nanoid } from 'nanoid';

const Person = (props: any) => {
  let [name, setName] = useState('')
  let [age, setAge] = useState('')
  let personList: [] = props.person

  const addHandle = () => {
    let personObj = {
      id: nanoid(),
      name,
      age
    }
    props.add(personObj)
    personList = []
  }
  const nameInput = (v: any) => {
    // name = v.target.value
    setName(() => v.target.value)
  }
  const ageInput = (v: any) => {
    setAge(() => v.target.value)
  }

  return (

    <div>
      <h2>我是person组件,上方合记:{props.count}</h2>
      <Input onChange={nameInput} value={name} placeholder="请输入名称" />
      <Input onChange={ageInput} value={age} placeholder="请输入年龄" />
      <Button onClick={addHandle}>添加</Button>
      <ul>
        {
          personList.map((item: any) => {
            return <li key={item.id}>名称:{item.name} -- 年龄{item.age}</li>
          })
        }




      </ul>

    </div>
  )
}

export default connect(
  (state: any) => ({ count: state.Count, person: state.Person }),
  {
    add: createAddPerson
  }
)(Person)