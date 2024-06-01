function signup() {
    var getemailup = document.getElementById('signupemail').value;
    var getpassup = document.getElementById('signuppassword').value;
    localStorage.setItem("email", getemailup);
    localStorage.setItem("password", getpassup);
    alert("Sign up successful...");
    location.href = "signin.html";
}

function signin() {
    var getemailin = document.getElementById('signinemail').value;
    var getpassin = document.getElementById('signinpassword').value;
    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");

    if (getemailin === storedEmail && getpassin === storedPassword) {
        alert("Sign in successful!");
        location.href = "question.html";
    } else {
        alert("Invalid email or password");
    }
}

function submitQuiz() {
    var q1 = document.getElementById('q1').value;
    var q2 = document.getElementById('q2').value;
    var q3 = document.getElementById('q3').value;

    alert("Quiz submitted! Thank you.");
}
var timerInterval;
var running = false;
var startTime;
var elapsedTime = 0;
var duration = 60 * 1000; // 60 seconds in milliseconds

function updateTimer() {
    var now = Date.now();
    elapsedTime = now - startTime;
    var remainingTime = duration - elapsedTime;

    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var display = document.getElementById('timer');
    display.textContent = "Time left: " + seconds + "s";

    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        alert("Time is up! You will be logged out.");
        location.href = "signin.html";
    }
}

function start() {
    if (!running) {
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000); // update every second
        running = true;
    }
}

window.onload = function () {
    start();
};
