function timeToEat(str){
    //debugger
    let date = new Date(str)
    hour = date.getHours()
    minute = date.getMinutes()
    let targetHour 
    let targetMinute
    let result = []
    if(hour>=12){
      targetHour = (19 - hour) 
    }else if(hour>7){
        targetHour = (12-hour)
    }
    else{
       targetHour = (7-hour)
    }
    if(minute>0){
        result.push(targetHour-1)
        targetMinute = 60 -minute
        result.push(targetMinute)
    }
    else{
        result.push(targetHour)
        result.push(minute)
    }
    return result
}

console.log(timeToEat("February 04, 2011 3:25 pm"))
console.log(timeToEat("February 04, 2011 10:15 am"))