import isEquationValid from "./checkEquation"

function symbolChanging(string){
    let newStr = string.replaceAll("Sqrt", 's')
    let newStr1 = newStr.replaceAll("^2", 'S')
    return newStr1
}

function stringToArray(string){
    let newString = symbolChanging(string)
    let array = newString.split('')

    if (isEquationValid(array)){
        for (let i=0; i<array.length; i++){
            if ((Number(array[i]) && array[i+1]==='.')||
                (Number(array[i]) && Number(array[i+1]))||
                (array[i]==='.' && Number(array[i+1]))
            ){
                    let str = array[i].concat(array[i+1])
                    array[i+1] = str
                    array.splice(i, 1)
                    i--
                }
        }
        return array
    }
    return -1
}

export default stringToArray