import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router'



import Home from './pages/Home'
import About from './pages/About'
import Register from "./pages/Register"
import Login from "./pages/Login"
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoutes from '../utils/ProtectedRoutes'
import Header from '../components/Header'
import Footer from '../components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/sign-up' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/about' element={<About />} />
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
        </Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
