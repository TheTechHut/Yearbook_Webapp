import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Students from './routes/Students'
import Projects from './routes/Projects'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/student" element={<Students/>}/>
        <Route path= "/project" element={<Projects/>}/>
      </Routes>
      <Navbar/>
    </div>
  )
}

export default App
