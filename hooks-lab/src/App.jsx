import { Route, Routes } from 'react-router-dom'
import './App.css'
import PostDetail from './views/PostDetail/PostDetail'
import Home from './views/Home/Home'
import Navbar from './components/misc/NavBar/Navbar'
import { useContext } from 'react'
import ThemeContext from './contexts/ThemeContext'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="App text-body bg-body" data-bs-theme={theme}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/posts/:id' element={<PostDetail />}/>
      </Routes>
    </div>
  )
}

export default App
