let timer;
let remainingTime = 0;
let isRunning = false;

// Update display function
function updateDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    document.getElementById("timeDisplay").textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Start timer function
function startTimer() {
    if (isRunning) return;
    const minutesInput = document.getElementById("minutesInput").value;
    remainingTime = parseInt(minutesInput) * 60;
    if (isNaN(remainingTime) || remainingTime <= 0) return;
    isRunning = true;
    timer = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            updateDisplay();
        } else {
            clearInterval(timer);
            isRunning = false;
            alert("Time's up!");
            updateDisplay();
        }
    }, 1000);
}

// Pause timer function
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Reset timer function
function resetTimer() {
    clearInterval(timer);
    remainingTime = 0;
    isRunning = false;
    updateDisplay();
    document.getElementById("minutesInput").value = '';
}

// Event listeners for buttons
document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("pauseButton").addEventListener("click", pauseTimer);
document.getElementById("resetButton").addEventListener("click", resetTimer);
