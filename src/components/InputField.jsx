import React from 'react'

const InputField = ({currentValue, setCurrentValue, isValid}) => {
  return (
    <div>
      <input className='p-2 w-80 border-t-2 dark:border-slate-900 bg-slate-50 outline-none dark:bg-slate-700 dark:text-white text-1xl' type="text" value={currentValue} onChange={(e)=>setCurrentValue( e.target.value)}/>
      <p className={`${isValid ? 'hidden' : 'inline-block'} text-red-600 text-xs`}>Invalid Equation !</p>
    </div>
  )
}

export default InputField