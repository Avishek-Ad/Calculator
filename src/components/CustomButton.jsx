import React from 'react'

export const SquareButton = ({text, dedicatedFunction}) => {
  return (
    <button className='bg-slate-50 rounded-md hover:bg-slate-200 w-14 h-12 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-800'
    onClick={()=>dedicatedFunction(text)}>
      {text == 'M' ? 'mod' : text == '^2' ? <>x{<sup>2</sup>}</> : text}
    </button>
  )
}

export const SquareButtonIcon = ({text, iconTag, dedicatedFunction}) => {
  return (
    <button className='bg-slate-50 rounded-md hover:bg-slate-200 w-14 h-12 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-800'
    onClick={()=>dedicatedFunction(text)}>
      {iconTag}
    </button>
  )
}

export const EqualButton = ({text, dedicatedFunction}) => {
    return (
      <button className='bg-orange-500 absolute right-0 bottom-0 rounded-md hover:bg-orange-400 w-14 h-24 dark:text-white dark:hover:bg-orange-600'
      onClick={()=>dedicatedFunction()}>
        {text}
      </button>
    )
  }

