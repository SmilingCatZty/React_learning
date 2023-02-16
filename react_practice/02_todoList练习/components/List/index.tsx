import React from 'react'
import Item from '../Item'
import './index.css'

interface ListTypes {
  todos:object
  deleteItem: Function,
  handleItem: Function
}

const List: React.FC<ListTypes> = (props: any) => {
  const { todos } = props

  return (
    <div className='contain_list'>
      <ul className='contain_list-ul'>
        {
          todos.map((todo: any) => {
            return <Item key={todo.id} {...todo} handleItem={(id: any, done: any) => props.handleItem(id, done)} deleteItem={(id: string | number) => props.deleteItem(id)} />
          })
        }
      </ul>
    </div>
  )
}
export default List
