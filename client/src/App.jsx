import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router'


import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Register from "./pages/Register"
import Login from "./pages/Login"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-up'element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>



    </>
  )
}

export default App
