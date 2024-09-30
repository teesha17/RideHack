import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './screens/home/Home'
import Login from './screens/login/Login'
import SignUp from './screens/signup/Signup'
import Dashboard from './screens/dashboard/Dashboard'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
