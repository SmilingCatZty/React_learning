import { ADDPERSON } from '../constant'

const init = [
  { id: 0, name: 'robot', age: '123' }
]

const PersonReducer = (preState: any[] = init, action: any) => {
  const { type, data } = action
  switch (type) {
    case ADDPERSON:
      /**
       * 这里不适合使用unshift(data)方法
       * 当使用 Array.unshift() 来添加到 state 中时，该方法会返回新的长度，但不会返回新的数组对象
       * 假设使用类似 posts.unshift(newPost) 形式来添加新内容时，会遇到页面不刷新的问题
       */
      
      return [data, ...preState]

    default:
      return preState
  }
}


export default PersonReducer 