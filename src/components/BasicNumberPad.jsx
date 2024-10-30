import React from 'react'
import {SquareButton, SquareButtonIcon, EqualButton} from './CustomButton'
import { TbMath, TbMathPi } from "react-icons/tb";
import { CgMathDivide } from "react-icons/cg";
import { FaBackspace } from "react-icons/fa";
import stringToArray from '../jsFunctions/stringToArray';
import infixToPostfix from '../jsFunctions/infixToPostfix';
import solvePostfix from '../jsFunctions/solvePostfix';


const BasicNumberPad = ({currentValue, setCurrentValue, operations, setOperations, setIsValid}) => {
    const funcFor = (char) => {
        setIsValid(true)
        if (currentValue)
            return setCurrentValue(currentValue.concat(char))
        return setCurrentValue(char)
    }

    const calculateEquation = () => {
        if (!Number(currentValue)){
            // convert string into array
            const currentArray = stringToArray(currentValue)
            if (currentArray === -1){
                return setIsValid(false)
            }
            // change to postfix
            const postfixArray = infixToPostfix(currentArray)
            //console.log(postfixArray)
            // solve sequentially
            const result = solvePostfix(postfixArray)
            // update to previous operations
            if (result)
                setOperations([{equation:currentValue, result:result}, ...operations])
            // clear input and display result
            setCurrentValue(String(result))
        }
    }

    const clearInput = () => {
        setIsValid(true)
        setCurrentValue('')
    }

    const removeOne = () => {
        setIsValid(true)
        setCurrentValue(currentValue.slice(0, -1))
    }

    const handlePi = () => {
        setIsValid(true)
        setCurrentValue(currentValue.concat(String(Math.PI)))
    }

    return (
        <div className='w-80 h-72 dark:bg-slate-600 p-2'>
        <div className='grid grid-rows-5 grid-flow-col gap-1 relative'>
            <SquareButtonIcon text='clr' iconTag={<FaBackspace className='mx-auto'/>} dedicatedFunction={clearInput}/>
            <SquareButton text='7' dedicatedFunction={funcFor}/>
            <SquareButton text='4' dedicatedFunction={funcFor}/>
            <SquareButton text='1' dedicatedFunction={funcFor}/>
            <SquareButton text='0' dedicatedFunction={funcFor}/>

            <SquareButton text='AC' dedicatedFunction={removeOne}/>
            <SquareButton text='8' dedicatedFunction={funcFor}/>
            <SquareButton text='5' dedicatedFunction={funcFor}/>
            <SquareButton text='2' dedicatedFunction={funcFor}/>
            <SquareButton text='.' dedicatedFunction={funcFor}/>

            <SquareButton text='(' dedicatedFunction={funcFor}/>
            <SquareButton text='9' dedicatedFunction={funcFor}/>
            <SquareButton text='6' dedicatedFunction={funcFor}/>
            <SquareButton text='3' dedicatedFunction={funcFor}/>
            <SquareButton text='%' dedicatedFunction={funcFor}/>

            <SquareButton text=')' dedicatedFunction={funcFor}/>
            <SquareButtonIcon text='/' iconTag={<CgMathDivide className='mx-auto'/>} dedicatedFunction={funcFor}/>
            <SquareButton text='*' dedicatedFunction={funcFor}/>
            <SquareButton text='-' dedicatedFunction={funcFor}/>
            <SquareButton text='+' dedicatedFunction={funcFor}/>

            <SquareButtonIcon text='Pi' iconTag={<TbMathPi className='mx-auto'/>} dedicatedFunction={handlePi}/>
            <SquareButtonIcon text='Sqrt' iconTag={<TbMath className='mx-auto'/>} dedicatedFunction={funcFor}/>
            <SquareButton text='^2' dedicatedFunction={funcFor}/>
            <EqualButton text='=' dedicatedFunction={calculateEquation}/>
            
        </div>
        </div>
    )
}

export default BasicNumberPad