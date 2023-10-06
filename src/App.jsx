import { Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import FeedList from './components/feedlist/FeedList'
import Login from './components/login/Login'
import Home from './components/home/Home'
import SidebarNav from './components/sidebarNav/SidebarNav'
import Main from './components/Main/Main'

function App() {


  return (
    <>
      {/* <Navbar /> */}
    <div className='container'>
      <SidebarNav />
      <Main /> 
      {/* <Routes> */}
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/' element={<Home />}/> */}
      {/* </Routes> */}
      {/* <FeedList /> */}
    </div>
    </>
  )
}

export default App
