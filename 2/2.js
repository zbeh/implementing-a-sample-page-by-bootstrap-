function stackCalc(str){
    if(str.length<=1){
        return 0
    }
    if(str.includes("DUP")){
        let insert = str.indexOf("DUP")
        str = str.replace("DUP" , str[insert-1])
    }
    let array = str.split("")
    while(array.length>1){
        let isOprand = (item) => (item ==="+") || (item ==="-") || (item === "*") || (item === "/")
        let index = array.findIndex(isOprand)
        let operator = array [index]
        let firstValue = array[index-1]
        let secondValue = array [index-2]
        let result
        if (isNaN(firstValue) || isNaN(secondValue)){
            return `invalid instruction:${secondValue}${operator}${firstValue} `
        }
        else{
           array.splice(index,1) 
           array.splice(index-1,1)
           array.splice(index-2,1)
            switch (operator) {
                case "+":
                 result = (+(firstValue)) + (+(secondValue))
                break
                case "*":
                 result = firstValue * secondValue 
                break
                case "-":
                 result = firstValue - secondValue 
                break
                case "/":
                 result = firstValue / secondValue 
                break
            }
            array.splice(index-2,0,result)
        }
    }
   return array
    
}
console.log(stackCalc(""))
console.log(stackCalc("56+"))
console.log(stackCalc("3DUP+"))
console.log(stackCalc("6557*-/"))
console.log(stackCalc("xy+"))