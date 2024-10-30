import React from 'react'

const PastOperation = ({pastOperations, currentValue, setCurrentValue}) => {
  const handleClick = (data) => {
    setCurrentValue(currentValue.concat(data))
  }

  return (
    <div className='dark:bg-slate-700 dark:border-slate-800 dark:text-white max-h-24 overflow-auto scrollbar'>
        {pastOperations.map(({equation, result}, index) => {
            return (
                <div key={index} className='flex flex-row gap-3 justify-center border-b-2 dark:border-slate-800 px-3'>
                    <div onClick={()=>handleClick(equation)} className='cursor-pointer scrollbar text-left flex-grow w-1/2 overflow-hidden hover:overflow-auto'>{equation}</div>
                    <div className='flex-grow text-center'>=</div>
                    <div onClick={()=>handleClick(result)} className='cursor-pointer text-right w-1/2'>{result}</div>
                </div>
            )
        })}
    </div>
  )
}

export default PastOperation