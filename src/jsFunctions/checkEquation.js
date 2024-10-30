function checkOperator(char){
    const operatorString = '-+/*sS%'
    return operatorString.includes(char) ? true : false
}

function isEquationValid(array){
    if (checkOperator(array[-1])){
        return false
    }
    for (let i=0; i<array.length; i++){
       if (checkOperator(array[i]) && checkOperator(array[i+1])){
            return false
       }
    }
    return true
}

export default isEquationValid