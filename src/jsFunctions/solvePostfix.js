function monoOrDi(op){
    if (op == '+' || op == '-' || 
        op == '*' || op == '/' ||
        op == '%'){
            return 'Di'
        }
    if (op == 'S' || op == 's')
        return 'Mono'
    return null
}

function monoSolve(arg1, op){
    switch (op) {
        case 'S':
            return Math.pow(Number(arg1), 2)

        case 's':
            return Math.sqrt(Number(arg1))

        default:
            return 0
    }

}

function diSolve(arg1, arg2, op){
    switch (op) {
        case '+':
            return Number(arg1) + Number(arg2)
        
        case '-':
            return Number(arg1) - Number(arg2)

        case '*':
            return Number(arg1) * Number(arg2)
        
        case '/':
            return Number(arg1) / Number(arg2)

        case '%':
            return Number(arg1) % Number(arg2)

        default:
            return 0
    }
}

function solvePostfix(array){
    let result = 0
    for (let i=0; i<array.length; i++){
        if (!Number(array[i])){
            const state = monoOrDi(array[i])
            if (state == 'Mono'){
                result = monoSolve(array[i-1], array[i])
                array[i] = result
                array.splice(i-1, 1)
                i = 0
            }
            else if (state == 'Di'){
                result = diSolve(array[i-2], array[i-1], array[i])
                array[i] = result
                array.splice(i-2, 2)
                i = 0
            }
        }
    }
    return result

}

export default solvePostfix