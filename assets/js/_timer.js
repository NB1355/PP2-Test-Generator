

function clock() {

  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  hh = showTwoDigit(h);
  mm = showTwoDigit(m);
  ss = showTwoDigit(s);

  document.getElementById("clock").innerHTML = h + ":" + mm + ":" + ss;
  setTimeout(clock, 1000);
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
    var timePassed2 = toHhMmSs(timePassed);
    var timeLeft = timeLimit - timePassed;

    var timeLeftPercent = (timeLeft / timeLimit * 100).toFixed(2);

    document.getElementById("bar").style.width = timeLeftPercent + "%";
    document.getElementById("bar").innerHTML = timeLeftPercent + "%";


    seconds++;

    appendMinutes.innerHTML = timePassed2.minutes2;
    appendSeconds.innerHTML = timePassed2.seconds2;

    document.getElementById("times-check").innerHTML = ` Limit:${timeLimit}  Passed:${timePassed} Left:${timeLeft}`;

    // for functional test
    console.log(timePassed2);
  }
}

function toHhMmSs(totalSeconds) {
  //adjuster External code,refrence https://codingbeautydev.com/

  const seconds2 = showTwoDigit(totalSeconds % 60);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes2 = showTwoDigit((totalMinutes) % 60);
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




