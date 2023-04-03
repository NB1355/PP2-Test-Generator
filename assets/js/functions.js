


function setUp() {
    getMode();
    showTimer();
    clock();
    setTimer();
}


function getMode() {

    document.getElementsByName("set_mode").forEach(radio => {
        if (radio.checked) {
            let theMode = radio.value;

            // for functional test
            document.getElementById("mode-check").innerHTML = `${theMode} Mode`;
            console.log(radio.value);
        }
    })
}


function showTimer() {

    if (document.getElementById('set-timer').checked) {

        let theTimer = "ON"

        // for functional test
        document.getElementById("timer-check").innerHTML = `Timer ${theTimer}`;
        // console.log(theTimer);
    }
    else {

        let theTimer = "OFF"

        // for functional test
        document.getElementById("timer-check").innerHTML = `Timer ${theTimer}`;
        // console.log(theTimer);
    }
}


// LOAD ...............................................................................


let queryCount = 7; // number of the selected questions

var select = [];
let s = 0;


function questionsLoad(theStatus,theTime) {

    fetch("assets/data/default.json") // link later to select and upload process -----------#check
        .then(response => {
            return response.json();
        })
        .then(data => {

            randomSelect(data);
            list = data; //Creates Global Variable OPT: use local possible?
            questionShow();

            // for functional test
            // console.log(data);
        });
}


function randomSelect(data) {

    const maxNum = data.questions.length;
    while (select.length < queryCount) {

        var num = Math.floor(Math.random() * maxNum) + 1;
        if (num <= maxNum && select.includes(num) == false) {
            select.push(num);
        }
    }
    info1.innerHTML = queryCount + "/" + maxNum + " random selection: " + select;
}


function questionShow() {

    answersRecord();
    optionsClear();

    if (s < select.length) {

        let q = select[s] - 1;
        qID.innerHTML = list.questions[q].qRefID;
        qText.innerHTML = list.questions[q].qRefText;
        A.innerHTML = list.questions[q].checkbox1;
        B.innerHTML = list.questions[q].checkbox2;
        C.innerHTML = list.questions[q].checkbox3;
        D.innerHTML = list.questions[q].checkbox4;
        s++

        optionesTrue(q);

    }
    else {
        document.getElementById("btn-load").value = "end";
        document.getElementById("btn-load").disabled = true;
    }
}


// setup correct options

function optionesTrue(q) {

    let xCorrects = list.questions[q].corrects

    for (i = 0; i < xCorrects.length; i++) {
        let correct = xCorrects.charAt(i);
        switch (correct) {
            case "1":
                document.getElementById("checkbox1").checked = true;
                break;
            case "2":
                document.getElementById("checkbox2").checked = true;
                break;
            case "3":
                document.getElementById("checkbox3").checked = true;
                break;
            case "4":
                document.getElementById("checkbox4").checked = true;
                break;
        }
    }

    // for functional test
    // console.log(xCorrects);
}



function optionsClear() {

    // .........................................................................................................includes setup !!!!

    let checkboxes = document.getElementsByTagName("input");
    for (var checkbox of checkboxes) {
        checkbox.checked = false;
    }

}


function answersShow() {

    let xShow = document.getElementById("btn-show").value;

    if (xShow == "Show Answers") {
        opacity = 0.7;
        document.getElementById("btn-show").value = "Hide Answers";
    } else {
        opacity = 0.1;
        document.getElementById("btn-show").value = "Show Answers";
    }


    var theAnswers = document.querySelectorAll(".answers");
    for (var i = 0; i < theAnswers.length; i++) {
        theAnswers[i].style.opacity = opacity;
    }

}


// Check and Record the Answers 


function answersRecord() {

    answersCheck();

    let record = document.getElementById("qID").innerHTML + " Pass: " + pass;
    const recordNode = document.createElement("li");
    const recordText = document.createTextNode(record);

    recordNode.appendChild(recordText);
    document.getElementById("answersRecord-T").appendChild(recordNode);
}

function scorePlus() {

    let oldScore = parseInt(document.getElementById("scorePlus").innerText);
    document.getElementById("scorePlus").innerText = ++oldScore;
}

function scoreMinus() {

    let oldScore = parseInt(document.getElementById("scoreMinus").innerText);
    document.getElementById("scoreMinus").innerText = ++oldScore;
}

function answersCheck() {

    if (option1.checked == checkbox1.checked &&
        option2.checked == checkbox2.checked &&
        option3.checked == checkbox3.checked &&
        option4.checked == checkbox4.checked
    ) {
        scorePlus();
        pass = "Y";

    } else {
        scoreMinus();
        pass = "N";
    }
}


// TIMER................................................................................



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
  
  
  
  
  