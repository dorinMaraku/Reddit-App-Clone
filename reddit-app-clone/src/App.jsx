import { Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import FeedList from './components/feedlist/FeedList'
import Login from './components/login/Login'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      <FeedList />
    </>
  )
}

export default App
