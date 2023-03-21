let breakIncrementButton = document.getElementById("break-increment")
let breakDecrementButton = document.getElementById("break-decrement")
let sessionDecrementButton = document.getElementById("session-decrement")
let sessionIncrementButton = document.getElementById("session-increment")
let startStopButton = document.getElementById("start_stop")
let resetButton = document.getElementById("reset")

let breakLength = document.getElementById("break-length")
let sessionLength = document.getElementById("session-length")
let timeLeft = document.getElementById("time-left")


let breakSession;
let session;
let timeIsRunning = false;

sessionIncrementButton.addEventListener("click", () => {
    if (!timeIsRunning) {
        console.log("session increment worked");
        session = parseInt(sessionLength.innerText);
        session += 1;
        sessionLength.innerText = session;
        console.log(session);

        // Süreyi saniye cinsine dönüştür
        let totalSeconds = session * 60;

        // Dakika ve saniyeyi hesapla
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        // Zaman dizgisini "mm:ss" formatında göster
        timeLeft.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`.toString();
    }

    console.log(timeLeft.innerText);
});

sessionDecrementButton.addEventListener("click", () => {
    if (!timeIsRunning) {
        console.log("session decrement worked")
        // ekranda yazan oturumu stringe çevir session değişkenine ata
        session = parseInt(sessionLength.innerText)
        // oturumu 1 azalt
        session -= 1;
        // yeni değişkeni sessionLength değişkenine ata
        sessionLength.innerText = session;

        // Süreyi saniye cinsine dönüştür
        let totalSeconds = session * 60;

        // Dakika ve saniyeyi hesapla
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        // Zaman dizgisini "mm:ss" formatında göster
        timeLeft.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`.toString();
    }

    console.log(timeLeft.innerText);
})


breakDecrementButton.addEventListener("click", () => {

    if (!timeIsRunning) {
        console.log("break decrement worked")
        // ekranda yazan oturumu stringe çevir session değişkenine ata
        breakSession = parseInt(breakLength.innerText)
        // oturumu 1 azalt
        breakSession -= 1;
        // yeni değişkeni sessionLength değişkenine ata
        breakLength.innerText = breakSession;


    }

    console.log(breakSession);
})

breakIncrementButton.addEventListener("click", () => {

    if (!timeIsRunning) {
        console.log("break increment worked")
        // ekranda yazan oturumu stringe çevir session değişkenine ata
        breakSession = parseInt(breakLength.innerText)
        // oturumu 1 arttır
        breakSession += 1;
        // yeni değişkeni sessionLength değişkenine ata
        breakLength.innerText = breakSession;

    }

    console.log(breakSession);
})



let timer;
let timerStatus = "begin";

startStopButton.addEventListener("click", () => {
    if (timerStatus === "begin" || timerStatus === "stopped") {

        console.log("start stop it does worked")
        timerStatus = "counting"
        timeIsRunning = true;

        timer = setInterval(() => { timeLeft.innerText = decrementTime(timeLeft.innerText) }, 1000);
    } else if (timerStatus === "counting") {
        timeIsRunning = false;
        console.log('stoped time')
        timerStatus = "stopped"
        clearInterval(timer);
        clearInterval(breakTimer)
    }

})

let breakTimer
function breakTime() {

    var breakTime = breakSession * 60;
    // Initialize the break timer
    breakTimer = setInterval(function () {

        // Get the minutes and seconds
        var minutes = Math.floor(breakTime / 60);
        var seconds = breakTime - minutes * 60;

        
    
        
        // Decrement the time
        breakTime--;
        console.log(breakTime)
        console.log(typeof breakTime)
        // Check if the break time has reached 0
        if (breakTime < 0) {
            // Clear the break timer
            clearInterval(breakTimer);

            // Notify the user that the break is over
            console.log("Break time is over. Let's get back to work!");
        }

        // Display the time in mm:ss format
        timeLeft.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`.toString();
        return timeLeft.innerText
    }, 1000);
}

resetButton.addEventListener("click", () => {
    console.log("ress the button");
    clearInterval(timer)
    timeLeft.innerText = '25:00'
    timerStatus = "begin"
    timeIsRunning = false;
    session = 25;
    breakSession = 5;
    clearInterval(breakTimer)
    breakLength.innerText = breakSession
    sessionLength.innerText = session;
})

function decrementTime(timeString) {
    let [minutes, seconds] = timeString.split(':').map(Number)
    console.log(timeString)
    console.log(typeof timeString)
    
    

    

    
    
     seconds --;
    if (seconds <= 0) {
        seconds = 59;
        minutes -=1;
        
    }
    if (minutes < 0) {
        clearInterval(timer);
        breakTime();
        
    }
    timeLeft.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`.toString();
    return timeLeft.innerText
}

function playAlert() {
    console.log("zaman doldu")
}