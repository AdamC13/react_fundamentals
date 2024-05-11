import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Image1 from './components/Image1'
import Image2 from './components/Image2'
import Image3 from './components/Image3'

function App() {

  return (
    <div >
      <div className="flex-container" id='header'>
        <Header />
      </div>
      <div className='flex-container' id='about'>
        <About />
      </div>
      <div className='flex-container' id='about'>
        <Contact />
      </div>
      <div className='flex-container' id='images'>
        <Image1 />
        <Image2 />
        <Image3 />
      </div>

    </div>
  )
}

export default App
