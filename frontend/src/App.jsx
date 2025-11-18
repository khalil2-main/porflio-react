
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import  ProjectGrid  from './pages/ProjectGrid'



function App() {


  return (
    <>
    <Routes>
      <Route path='' element={<HomePage/>}/>
      <Route path='projects' element={<ProjectGrid/>} />
    </Routes>
    </>
  )
}

export default App
