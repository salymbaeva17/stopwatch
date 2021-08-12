const startBtn = document.querySelector(".start-btn")
const stopBtn = document.querySelector(".stop-btn")
const resetBtn = document.querySelector(".reset-btn")
const timer = document.querySelector("#stopwatch")



let hour = 0
let min = 0
let sec = 0
let stopTime = true

function timerCycle() {
    if (!stopTime) {
        sec++

        if (sec === 60) {
            min++
            sec = 0
        }
        if (min === 60) {
            hour++
            min = 0
            sec = 0
        }
        if (hour < 10 && min < 10 && sec < 10){
            timer.innerHTML = `0${hour}:0${min}:0${sec}`
        } else if (hour < 10 && min < 10 ){
            timer.innerHTML = `0${hour}:0${min}:${sec}`
        } else if (hour < 10 && min < 10 ){
            timer.innerHTML = `0${hour}:0${min}:${sec}`
        } else{
            timer.innerHTML = `${hour}:${min}:${sec}`
        }


        setTimeout("timerCycle()", 1000)
    }
}


startBtn.addEventListener("click", function() {
        if (stopTime) {
            stopTime = false
            timerCycle()
        }
    }
)

stopBtn.addEventListener("click",
    function() {
        if (!stopTime) {
            stopTime = true
        }
    }
)
// reset button
resetBtn.addEventListener("click", function() {
        timer.innerHTML = '00:00:00'
        stopTime = true
        hour = 0
        min = 0
        sec = 0
    }
)

