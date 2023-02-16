import Header from './components/Header/index'
import List from './components/List/index'
import Footer from './components/Footer/index'
import './App.css'
import { useState } from 'react'
import { nanoid } from 'nanoid'
// import { staicPageModel } from './staticPage.module'

export default function App() {
  let [todos, setTodos]: any = useState(
    [
      { id: 0, name: '吃饭', done: true },
      { id: 1, name: '睡觉', done: true },
      { id: 2, name: '打豆豆', done: false }
    ]
  )

  // 处理列表
  function handleList(todo: any) {
    const newTodoList = [...todos]
    if (todo) {
      newTodoList.push({ id: nanoid(), name: todo, done: false })
      setTodos(() => newTodoList)
    }
  }

  // 处理item
  function handleItem(id: any, done: any) {
    const newTodos = todos.map((i: any) => {
      if (i.id === id) {
        return { ...i, done }
      } return i
    })
    setTodos(() => newTodos)
  }

  // 删除item
  const deleteItem = (id: string | number) => {
    const newTodos = todos.filter((item: any) => {
      return item.id !== id
    })
    setTodos(() => newTodos)
  }

  // 总数检查
  const handleChecked = (status: boolean) => {
    const newTodos = todos.map((item: any) => {
      return { ...item, done: status }
    })
    setTodos(() => newTodos)
  }

  const clearAllDone = () => {
    const newTodos = todos.filter((item: any) => {
      return !item.done
    })
    setTodos(() => newTodos)
  }

  return (
    <div className='contain'>
      <div className="contain_wrap">
        <Header handleList={(todo: any) => handleList(todo)} />
        <List todos={todos} handleItem={(id: any, done: any) => handleItem(id, done)} deleteItem={(id: string | number) => deleteItem(id)} />
        <Footer todos={todos} handleChecked={(status: boolean) => handleChecked(status)} clearAllDone={() => clearAllDone()} />
      </div>
    </div>
  )
}
