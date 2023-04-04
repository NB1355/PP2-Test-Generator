
let theMode;
let theTimer;
let theCount;
let theLimit;
let theStatus;

let theData = [];
let select = [];
let isSelect = 0;


// Gets defaul setup parameters onload

function setUp() {
    setMode();
    document.getElementById("mode-set").innerHTML = `Mode ${theMode}`;

    setTimer();
    document.getElementById("timer-set").innerHTML = `Timer ${theTimer}`;

    setCount();
    document.getElementById("count-set").innerHTML = `${theCount} questions`;

    setLimit();
    document.getElementById("limit-set").innerHTML = `${theLimit} seconds limit`;
}

function setTimer() {
    if (document.getElementById('set-timer').checked) {
        theTimer = "ON"
    }
    else {
        theTimer = "OFF"
    }
}


function setMode() {
    document.getElementsByName("set_mode").forEach(radio => {
        if (radio.checked) {
            theMode = radio.value;
        }
    })
}


function setCount() {
    theCount = document.getElementById("set-random").value;
}


function setLimit() {
    theLimit = document.getElementById("set-limit").value * theCount;
}


function getStatus(isSelect, q, selection) {
    // let status = "ready";
    // switch (status) {
    //     case "1":
    //         document.getElementById("checkbox1").checked = true;
    //         break;
    //     case "2":

    // }
    console.log("isSelect:", isSelect, " q: ", q, " selection: ", selection);

}

// LOAD ...............................................................................

document.getElementById("btn-load").addEventListener("click", questionLoad);

function questionLoad() {
    displayClass(".data", "block");

    fetch("assets/data/default.json") // link later to select and upload process -----------#check
        .then(response => {
            return response.json();
        })
        .then(data => {

            theData = data;
            randomSelect(theData);
            
            questionShow();
        });
}


function randomSelect(theData) {

    const maxNum = theData.questions.length;
    while (select.length < theCount) {

        var num = Math.floor(Math.random() * maxNum) + 1;
        if (num <= maxNum && select.includes(num) == false) {
            select.push(num);
        }
    }
    selection.innerHTML = `[${select}]`;
}


function questionShow() {

    if (isSelect < select.length) {


        answersRecord();
        optionsClear();

        let q = select[isSelect] - 1;
        qID.innerHTML = theData.questions[q].qRefID;
        qText.innerHTML = theData.questions[q].qRefText;
        A.innerHTML = theData.questions[q].checkbox1;
        B.innerHTML = theData.questions[q].checkbox2;
        C.innerHTML = theData.questions[q].checkbox3;
        D.innerHTML = theData.questions[q].checkbox4;

        getStatus(isSelect, q);
        isSelect++

        optionesTrue(q);
        document.getElementById("btn-load").value = "Next";
    }
    else {
        document.getElementById("btn-load").value = "Submit";
        // document.getElementById("btn-load").addEventListener("click", showResult)
        // document.getElementById("btn-load").value = "Email the Resul";
    }

}

// setup correct options

function optionesTrue(q) {

    let isCorrect = theData.questions[q].corrects;

    for (i = 0; i < isCorrect.length; i++) {
        let correct = isCorrect.charAt(i);
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
}

function optionsClear() {

    let checkboxeAs = document.getElementsByClassName("answers");
    for (var checkbox of checkboxeAs) {
        checkbox.checked = false;
    }
    let checkboxeOs = document.getElementsByClassName("options");
    for (var checkbox of checkboxeOs) {
        checkbox.checked = false;
    }
}


// Show and hide correct answers

document.getElementById("btn-show").addEventListener("click", answersShow);

function answersShow() {
    if (theMode == "learn") {
        let xShow = document.getElementById("btn-show").value;

        if (xShow == "Show Answers") {
            opacity = 0.8;
            document.getElementById("btn-show").value = "Hide Answers";
        } else {
            opacity = 0;
            document.getElementById("btn-show").value = "Show Answers";
        }
        var theAnswers = document.querySelectorAll(".answers");
        for (var i = 0; i < theAnswers.length; i++) {
            theAnswers[i].style.opacity = opacity;
        }
    } else {
        document.getElementById("tempInfo").innerHTML = "Not available in EXAM Mode";
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

function showResult() {
    console.log("show result!!!!!!!")
    document.querySelectorAll(".data").display = "none";

    displayClass(".data", "none");
}

function displayClass(name, value) {
    var theElements = document.querySelectorAll(name);
    for (var i = 0; i < theElements.length; i++) {
        theElements[i].style.display = value;
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

function setxxxxTimer() {

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




