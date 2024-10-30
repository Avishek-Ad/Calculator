import React, { useState } from 'react'
import DropDown from '../components/DropDown'
import PastOperation from '../components/PastOperation'
import InputField from '../components/InputField'
import BasicNumberPad from '../components/BasicNumberPad'

const Basic = ({currentMode, setCurrentMode, currentValue, setCurrentValue}) => {
    const [operations, setOperations] = useState([])
    const [isValid, setIsValid] = useState(true)

    return (
        <div className='w-80 mx-auto mt-10 bg-slate-100 rounded-md'>
            <div className='text-center'>
                <div className='dark:bg-slate-800'>
                    {/* <DropDown currentMode={currentMode} setCurrentMode={setCurrentMode}/> */}
                    <h3 className='dark:text-white'>Basic</h3>
                </div>
                <PastOperation pastOperations={operations} currentValue={currentValue} setCurrentValue={setCurrentValue} />
                <InputField currentValue={currentValue} setCurrentValue={setCurrentValue} isValid={isValid}/>
                <BasicNumberPad currentValue={currentValue} setCurrentValue={setCurrentValue} operations={operations} setOperations={setOperations} setIsValid={setIsValid}/>
            </div>
        </div>
    )
}

export default Basic