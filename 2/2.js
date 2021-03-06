function stackCalc(str){
    if(str.length<=1){
        return 0
    }
    if(str.includes("DUP")){
        let insert = str.indexOf("DUP")
        str = str.replace("DUP" , str[insert-1])
    }
    let array = str.split("")
    let index , operator , firstValue , secondValue , result
    while(array.length>1){
        index = array.findIndex((item) => (item ==="+") || (item ==="-") || (item === "*") || (item === "/"))
        operator = array [index]
        firstValue = array[index-1]
        secondValue = array [index-2]
        result
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