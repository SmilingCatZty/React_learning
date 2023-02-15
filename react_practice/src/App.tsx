import Header from './components/Header/index'
import List from './components/List/index'
import Footer from './components/Footer/index'
import './App.css'



export default function App() {
  return (
    <div className='contain'>
      <div className="contain_wrap">
        <Header />
        <List />
        <Footer />
      </div>
    </div>
  )
}
