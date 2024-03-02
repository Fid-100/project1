const time = document.querySelector("#time")
function currentTime(){
 let date = new Date()
 
 let hour = date.getHours()
 let minutes = date.getMinutes()
 let seconds = date.getSeconds()

hour = zeroCheck(hour)
    minutes = zeroCheck(minutes)
    seconds = zeroCheck(seconds)

time.textContent = `${hour} : ${minutes} : ${seconds}`
}

function zeroCheck(number){
    if(number < 10){
        return '0'+number
    }else {
        return number
    }
}

setInterval(currentTime, 1000)