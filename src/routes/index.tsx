import {Routes, Route, Navigate} from 'react-router-dom'
import { AboutMe, Home, Projects, Skills } from 'pages'

export const Rotas = () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/aboutme" element={<AboutMe/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}