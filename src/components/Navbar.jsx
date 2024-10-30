import React from 'react'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";



const Navbar = ({darkMode, toggleDarkMode}) => {
  return (
    <nav className='flex justify-between px-16 bg-slate-200 dark:bg-slate-900'>
        <h4 className='inline-block text-3xl pt-4 pb-1 dark:text-white'>Calculator App</h4>
        <button
        className='inline-block border-2 bg-slate-300 border-slate-400 rounded-lg p-3 my-1 hover:bg-slate-400 dark:border-slate-600 dark:hover:bg-slate-700 dark:text-white dark:bg-slate-800'
        onClick={toggleDarkMode}>
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
    </nav>
  )
}

export default Navbar