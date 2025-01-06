import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import {Provider} from "react-redux"
import store from './Store/Store.js';
import App from './App.jsx'
import Login from './components/Login/Login.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signUp' />
          <Route path='/products' />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
