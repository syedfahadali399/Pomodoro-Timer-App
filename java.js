let pomodoro = document.getElementById("mode-pomodoro")
let pomodoroShort = document.getElementById("mode-short")
let pomodoroLong = document.getElementById("mode-long")
let displayTime = document.getElementById("display-time")
let startBtn = document.getElementById("start-btn")
let pauseBtn = document.getElementById("pause-btn")
let resetBtn = document.getElementById("reset-btn")
let showPomodoro = document.getElementById("show-pomodoro")
let darkMode = document.getElementById("theme-toggle")
let section = document.getElementById("section")
let body = document.getElementById("body")
let switchMode;
let countPomodoro;
let minutes;
let seconds;
let minStr;
let secStr;
let interval

function showTime() {

    minStr = minutes.toString().padStart(2, '0');
    secStr = seconds.toString().padStart(2, '0');
    displayTime.textContent = `${minStr}:${secStr}`

}

function timer() {

    if(!interval) {
        interval = setInterval(() => {
    
            showTime()
    
            if(minutes === 0 && seconds === 0) {

                countPomodoro =+ 1
                showPomodoro.textContent = `${countPomodoro}`
                clearInterval(interval)
                return
            }
    
            if(seconds === 0) {
                minutes--
                seconds = 59
            } else {
                seconds--
            }
            
        }, 1000)
    }
}

function pauseTimer() {
    clearInterval(interval);
    interval = null;
}

function resetInterval() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    minutes = 0;
    minStr = minutes.toString().padStart(2, '0');
    secStr = seconds.toString().padStart(2, '0');
    displayTime.textContent = `${minStr}:${secStr}`
}

pomodoro.addEventListener("click", (e) => {
    e.preventDefault()

    minutes = 25
    seconds = 0
    resetInterval()
    showTime()

})

pomodoroLong.addEventListener("click", (e) => {
    e.preventDefault()

    minutes = 15
    seconds = 0
    resetInterval()
    showTime()

})

pomodoroShort.addEventListener("click", (e) => {
    e.preventDefault()

    minutes = 1
    seconds = 0
    resetInterval()
    showTime()

})

startBtn.addEventListener("click", (e) => {
    e.preventDefault()

    timer()
})

pauseBtn.addEventListener("click", (e) => {
    e.preventDefault()
    
    pauseTimer()
})

resetBtn.addEventListener("click", (e) => {
    e.preventDefault()

    resetTimer()
})

darkMode.addEventListener("click", (e) => {
    e.preventDefault()

    if(!switchMode) {
        section.classList.add("dark-mode")
        section.classList.remove("light-mode")
        body.style.backgroundColor = "black"
        body.style.color = "white"
        switchMode = true
    } else {
        section.classList.add("light-mode")
        section.classList.remove("dark-mode")
        body.style.backgroundColor = "whitesmoke"
        body.style.color = "black"
        switchMode = false
    }
})