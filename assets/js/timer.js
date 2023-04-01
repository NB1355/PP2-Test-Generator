

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


function getTheTime() {

  // var today = new Date();
  // var theTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const d = new Date();
  var theTime = d.getTime();




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

    var timeLimit = document.getElementById('set-limit').value * 60 * 1000;
    // var timeNow _= new Date().getTime();
    var timePassed = seconds * 1000;

    var timeLeft = timeLimit - timePassed;


    seconds++;

    if (seconds <= 9) {
      appendSeconds.innerHTML = "0" + seconds;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }
    // for functional test
   
   
    console.log("ss limit " + timeLimit);
    console.log("ss passed " + timePassed);
    console.log("ss Left " + timeLeft);
    
    
    // console.log(" now " + timeNow);

    


  }




}


