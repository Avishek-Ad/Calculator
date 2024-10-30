import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Basic from './modes/Basic'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [currentMode, setCurrentMode] = useState('Basic')
  const [currentValue, setCurrentValue] = useState('')

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <main className={` ${darkMode && 'dark'} h-screen`}>
      <div className=' dark:bg-slate-500 h-full'>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Basic
        currentMode={currentMode}
        setCurrentMode={setCurrentMode}
        currentValue={currentValue}
        setCurrentValue={setCurrentValue}
        />
      </div>
    </main>
  )
}

export default App