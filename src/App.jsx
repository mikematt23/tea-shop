import { useState } from 'react'
import Card from './components/UI/Card/Card'
import './App.css'
import Header from './components/Header/Header'
import "./index.css"

function App() {
  return (
    <>
    <Header/>
    <Card>
      <h1>Welcome</h1>
      <h3>Please login or sign up to browser our delicious teas.</h3>
    </Card>
    </>
  )
}

export default App
