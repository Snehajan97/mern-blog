import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import About from './pages/About'
import Projects from './pages/Projects'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Dasboard from './pages/Dasboard'
import SignIn from './pages/Signin';

export default function App() {
  return (
    <BrowserRouter> <Routes>
     <Route path="/" element={< Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/signin" element={<SignIn /> } />
     <Route path="/signup" element={<SignUp />} />
     <Route path="/dashboard" element={<Dasboard />} />
     <Route path="/projects" element={<Projects />} />

     
      </Routes>
      </BrowserRouter>
  )
}
