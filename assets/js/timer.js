

function clock() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  m = checkTime(m);
  s = checkTime(s);

  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  setTimeout(clock, 1000);
}


function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}


// =========================================

function setTimer() {

  var seconds = 00;
  var appendMinutes = document.getElementById("minutes")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);

    minutes = "00";
    seconds = "00";

    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
  }

  function startTimer() {

    buttonStop.style.display = "inline-block";
    buttonReset.style.display = "inline-block";

    var timeLimit = document.getElementById('set-limit').value * 60;
    var timePassed = seconds;
    var timeLeft = timeLimit - timePassed;
    var timePassed2 = toHhMmSs(timePassed);
    
    seconds++;

    appendMinutes.innerHTML = timePassed2.minutes2;
    appendSeconds.innerHTML = timePassed2.seconds2;

    // for functional test
    console.log(timePassed2);
    document.getElementById("timer-T").innerHTML = "TIMER: " + timePassed2.minutes2 + ":" + timePassed2.seconds2;
    document.getElementById("countdown-T").innerHTML = "COUNTDOWNss: " + timeLeft;
    document.getElementById("time-T").innerHTML = `Limit ${timeLimit} Passed ${timePassed} Left ${timeLeft}`;
  }

}

function toHhMmSs(totalSeconds) {
  // https://codingbeautydev.com/

  // const seconds = totalSeconds % 60;
  const seconds2 = showTwoDigit(totalSeconds % 60);

  const totalMinutes = Math.floor(totalSeconds / 60);

  // const minutes = totalMinutes % 60;
  const minutes2 = showTwoDigit((totalMinutes) % 60);

  // const hours = Math.floor(totalMinutes / 60);
  const hours2 = showTwoDigit(Math.floor(totalMinutes / 60));

  return { hours2, minutes2, seconds2 };
}


function showTwoDigit(number) {
  if (number <= 9) {
    numberShow = "0" + number;
  }
  else {
    numberShow = number;
  }
  return numberShow;
}

