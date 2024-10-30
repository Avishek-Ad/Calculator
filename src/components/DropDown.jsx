import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl";

const allDropDownItem = ['Basic', 'Advance', 'Financial', 'Programming', 'Keyboard']

const DropDown = ({currentMode, setCurrentMode}) => {
    const [dropDownItem, setDropDownItem] = useState(allDropDownItem)
    const [showDropDown, setShowDropDown] = useState(false)

    const handleClick = (item) => {
        setCurrentMode(item)
        setShowDropDown(!showDropDown)
    }

    const showMenu = () => {
        setShowDropDown(!showDropDown)
    }

    return (
        <div className='inline-block'>
            <button className='dark:text-white dark:bg-slate-800 dark:border-slate-800' onClick={showMenu}>
                {currentMode}{" "}
                <SlArrowDown  className='inline-block w-4'/>
            </button>
            <div className={`${showDropDown ? 'block' : 'hidden'} w-32 absolute dark:text-white dark:bg-slate-800`}>
                {dropDownItem.map((item, index) => {
                    return (
                        <div className='border-b-2 cursor-pointer dark:border-slate-800' key={index} onClick={()=>handleClick(item)}>
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DropDown