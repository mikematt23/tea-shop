import { useState } from 'react'
import Header from './components/Header/Header'
import Card from './components/UI/Card/Card'
import './App.css'
import "./index.css"

function App() {
  return (
    <>
      <Header/>
      <h2>Welcome</h2>
      <Card>
        <h3>Working</h3>
      </Card>
    </>
  )
}

export default App
