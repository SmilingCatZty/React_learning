import './App.css'
import axios from 'axios'

export default function App() {
  const getStudentData = () => {
    // 通过代理请求数据
    axios.get('http://localhost:3000/api1').then(
      response => {
        console.log('请求成功', response.data);
      },
      error => {
        console.log('请求失败', error);

      }
    )
  }
  return (
    <div >
      <button onClick={getStudentData}>点我获取学生数据</button>
    </div>
  )
}
