import { useParams } from 'react-router-dom';

const data = [
  { id: 0, title: '我是消息1', content: '我的内容是1' },
  { id: 1, title: '我是消息2', content: '我的内容是2' },
  { id: 2, title: '我是消息3', content: '我的内容是3' }
]

const Detail = (route: any) => {
  const id = Number(useParams().id)

  const findRes: any = {
    ...data.filter((item: any) => {
      return item.id === id;
    }),
  }

  return (
    <ul>
      <li>id:{id}</li>
      <li>title:{findRes[0]['title']}</li>
      <li>content:{findRes[0]['content']}</li>
    </ul>
  )
}

export default Detail