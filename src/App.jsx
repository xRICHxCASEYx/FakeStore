import React from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage/HomePage';

function App() {

  return (
    <>
      <div className='App'>
        <Header />
        <HomePage />
        <Footer />
      </div>
    </>
  )
}

export default App
