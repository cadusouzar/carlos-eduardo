import {Routes, Route, Navigate} from 'react-router-dom'
import { AboutMe, Home, Skills } from 'pages'

export const Rotas = () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/aboutme" element={<AboutMe/>}/>
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}