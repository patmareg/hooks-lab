import { Route, Routes } from 'react-router-dom'
import './App.css'
import PostDetail from './views/PostDetail/PostDetail'
import Home from './views/Home/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/posts/:id' element={<PostDetail />}/>
      </Routes>
    </div>
  )
}

export default App
