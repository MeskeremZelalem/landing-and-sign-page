import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ForgetPassword from './components/ForgetPassword.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BusinessAccount from './components/Business-account.jsx'
import ProfessionalAccount from './components/ProfessionalAccount.jsx'
import SocialAccount from './components/SocialAccount.jsx'
import SignUp from './pages/SignUp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}></Route>
    <Route path='/signup' element = {<SignUp />}></Route>
    <Route path='/forgetPassword' element={<ForgetPassword />}></Route>
    <Route path='/Business-account' element={<BusinessAccount/>}></Route>
    <Route path='/SocialAccount' element={<SocialAccount/>}></Route>
    <Route path='/ProfessionalAccount' element={<ProfessionalAccount/>}></Route>

  </Routes>
    
  </BrowserRouter>,
)
