import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Header from './components/Header/Header.jsx';
import App from './App.jsx'
import Login from './components/Login/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' />
        <Route path='/products' />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
