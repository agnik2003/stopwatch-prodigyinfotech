let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let preRecordedTimesRef = document.getElementById("pre-recorded-times");
let int = null;
let preRecordedTimes = [];

document.getElementById("start-timer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(int);
  const currentTime = getCurrentTime();
  preRecordedTimes.push(currentTime);
  displayPreRecordedTimes();
  resetTimer();
});

document.getElementById("clear-pre-recorded").addEventListener("click", () => {
  preRecordedTimes = [];
  displayPreRecordedTimes();
});

function displayPreRecordedTimes() {
  preRecordedTimesRef.innerHTML = preRecordedTimes
    .map((time) => `<div>${time}</div>`)
    .join("");
}

function resetTimer() {
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timeRef.innerHTML = "00 : 00 : 00 : 000";
}

function getCurrentTime() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  return `${h} : ${m} : ${s} : ${ms}`;
}

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
