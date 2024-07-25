let DURATION = 2; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", (a) => {
  startCountdown();
});
// ITERATION 2: Start Countdown
let time = document.getElementById("time");
function startCountdown() {
  console.log("startCountdown called!");
  let countdownTime = setInterval(() => {
    startBtn.disabled = true;
    time.innerHTML = DURATION;
    DURATION -= 1;
    if (DURATION < 0) {
      clearInterval(countdownTime);
      showToast();
    }
  }, 1000);
}
document.getElementById("toast");
// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  var addingToast = toast.classList;
  addingToast.toggle("show");
  var addingToast = setInterval(() => {
    addingToast.remove("show");
  }, 3000);
  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
