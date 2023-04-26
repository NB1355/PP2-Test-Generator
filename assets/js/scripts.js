

let theMode;
let theTimer;
let theCount;
let theLimit;
let theStatus;
let theData = [];
let select = [];
let isSelect = 0;
let theMax;

let Interval;
let seconds = 0;
let timeLimit;
// let theTime;
// let timePassed;
let qPass;
let timerShow;

// Gets default setup parameters 

const inputs = document.querySelectorAll(".setup");

inputs.forEach(setting => {
    setting.addEventListener("change", function () {

        setUp();
    });
});


function setRun() {

    theStatus = document.getElementById("btn-run").value;
    document.getElementById("defaults").innerHTML = "";


    document.getElementById("conditions").disabled = true;
    document.getElementById("btn-reset", "btn-show").disabled = false;
    // document.getElementById("btn-show").disabled = false;

    if (theStatus === "submit") {

        document.getElementById("btn-run").disabled = true;
        document.getElementById("btn-show").disabled = true;
        document.getElementById("btn-reset").disabled = false;

        document.getElementById("info-title").innerHTML = "summary report";
        document.getElementById("defaults").innerHTML = "";
        disableElement(".timer button", true);
        showResult();

    } else {

        timerStart();
        questionLoad();
        answersCheck();
        answersRecord();
        optionsClear();
    }

    document.getElementById("btn-show").value = "show answers";
}

function setNew() {


    if (document.getElementById("btn-reset").value === "confirm & reset") {

        location.reload();

    } else {

        document.getElementById("btn-reset").value = "confirm & reset";
        document.getElementById("btn-reset").style.color = "red";

        document.getElementById("btn-resume").disabled = false;
        document.getElementById("btn-run").disabled = true;
    }
}

function setBack() {

    if (theStatus === "submit") {

        document.getElementById("btn-run").disabled = true;

    } else {
        document.getElementById("btn-run").disabled = false;
    }

    document.getElementById("btn-resume").disabled = true;

    document.getElementById("btn-reset").value = "reset";
    document.getElementById("btn-resume").style.color = "#fff";
    document.getElementById("btn-reset").style.color = "#fff";
}

function showResult() {

    displayClass(".infoBox", "inline-block");
    displayClass(".data", "none");
    timerStop();

    document.getElementById("answer-count").innerHTML =
        `answer count: ${document.getElementById("answre-list").childElementCount}`;

    document.querySelector('#result-plus').innerHTML =
        `correct: ${document.querySelector('#score-plus').innerHTML}`;

    document.querySelector('#result-minus').innerHTML =
        `Incorrect:${document.querySelector('#score-minus').innerHTML}`;

    document.querySelector('#result-time').innerHTML =
        `Time: ${document.querySelector('#timer-show').innerHTML}`;

}

function displayClass(name, value) {
    let theElements = document.querySelectorAll(name);
    for (var i = 0; i < theElements.length; i++) {
        theElements[i].style.display = value;
    }
}

function disableElement(name, value) {
    let theElements = document.querySelectorAll(name);
    for (var i = 0; i < theElements.length; i++) {
        theElements[i].disabled = value;
    }
}

function setUp() {

    setMode();
    document.getElementById("mode-set").innerHTML = `Mode: ${theMode}`;

    setTimer();
    document.getElementById("timer-set").innerHTML = `Timer: ${theTimer}`;

    setCount();
    document.getElementById("count-set").innerHTML = `questions: ${theCount}`;
    document.getElementById("set-random-l").innerHTML = theCount;

    setLimit();

    document.getElementById("limit-set").innerHTML = `Limit: ${theLimit} seconds`;
    document.getElementById("set-limit-l").innerHTML = document.getElementById("set-limit").value;

    setMax();

    document.getElementById("defaults").innerHTML =
        `Settings: ${theMode} mode | Timer ${theTimer} | ${theCount} questions ${timeLimit} `;
}


function setMode() {

    document.getElementsByName("set_mode").forEach(radio => {
        if (radio.checked) {
            theMode = radio.value;
        }
    });

    if (theMode == "learn") {

        document.getElementById("set-timer").disabled = true;
        document.getElementById("set-limit").disabled = true;
        document.getElementById("bar").style.display = "none";

        disableElement(".timer button", false);
        disableElement("#btn-show", false);

    } else {

        document.getElementById("set-timer").disabled = false;
        document.getElementById("set-limit").disabled = false;
        document.getElementById("btn-show").disabled = true;
        document.getElementById("bar").style.display = "block";

        disableElement(".timer button", true);
    }
}

function setCount() {

    theCount = document.getElementById("set-random").value;
}

function setLimit() {

    if (theMode == "exam") {

        theLimit = document.getElementById("set-limit").value * theCount;



        timeLimit = "| Time Limit: " + toHhMmSs(theLimit).time2;

    } else {

        timeLimit = "| No Time Limit";
    }
}

function setMax() {

    fetch("assets/data/default.json") // link later to select and upload process -----------#check
        .then(response => {
            return response.json();
        })
        .then(data => {
            theData = data;

            const maxNum = theData.questions.length;
            theMax = maxNum;

            document.getElementById("set-random").max = theMax;
        });
}


// LOAD ...............................................................................


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
    // selection.innerHTML = `[${select}]`;
}

function questionShow() {

    if (isSelect < select.length) {

        let q = select[isSelect] - 1;
        qID.innerHTML = theData.questions[q].qRefID;
        qText.innerHTML = theData.questions[q].qRefText;
        A.innerHTML = theData.questions[q].checkbox1;
        B.innerHTML = theData.questions[q].checkbox2;
        C.innerHTML = theData.questions[q].checkbox3;
        D.innerHTML = theData.questions[q].checkbox4;
        optionesChecked(q);

        document.getElementById("btn-run").value = "next";
        isSelect++;
    }
    else {

        document.getElementById("btn-run").value = "submit";
    }
}


// setup correct options

function optionesChecked(q) {

    let isCorrect = theData.questions[q].corrects;

    for (var i = 0; i < isCorrect.length; i++) {
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

    var checkBox;
    let checkboxeAs = document.getElementsByClassName("answers");
    for (checkBox of checkboxeAs) {
        checkBox.checked = false;
    }
    let checkboxeOs = document.getElementsByClassName("options");
    for (checkBox of checkboxeOs) {
        checkBox.checked = false;
    }
}

// Show and hide correct answers by changing opacity.




function answersShow() {

    var theOpacity;

    if (theMode == "learn") {

        let xShow = document.getElementById("btn-show").value;

        if (xShow == "Show Answers") {

            theOpacity = ".8";
            document.getElementById("btn-show").value = "Hide Answers";

        } else {

            theOpacity = 0;
            document.getElementById("btn-show").value = "Show Answers";
        }

        var theAnswers = document.querySelectorAll(".answers");

        for (var i = 0; i < theAnswers.length; i++) {

            theAnswers[i].style.opacity = theOpacity;
        }
    }
}


function answersRecord() {

    let theAnswers = document.querySelectorAll(".answers");

    for (var i = 0; i < theAnswers.length; i++) {

        theAnswers[i].style.opacity = 0;
    }

    let record = document.getElementById("qID").innerHTML + " " + qPass;
    const recordNode = document.createElement("li");
    const recordText = document.createTextNode(record);

    if (isSelect > 0) {
        recordNode.appendChild(recordText);
        document.getElementById("answre-list").appendChild(recordNode);
    }
}

function scorePlus() {

    let oldScore = parseInt(document.getElementById("score-plus").innerText);
    document.getElementById("score-plus").innerText = ++oldScore;
}

function scoreMinus() {

    let oldScore = parseInt(document.getElementById("score-minus").innerText);
    document.getElementById("score-minus").innerText = ++oldScore;
}

function answersCheck() {

    
    if (option1.checked == checkbox1.checked &&
        option2.checked == checkbox2.checked &&
        option3.checked == checkbox3.checked &&
        option4.checked == checkbox4.checked
    ) {
        scorePlus();
        qPass = "Pass";

    } else {
        scoreMinus();
        qPass = "Fail";
    }
    return qPass;
 }



// TIMER................................................................................


function setTimer() {

    if (document.getElementById('set-timer').checked) {

        theTimer = "ON";

    }
    else {
        theTimer = "OFF";
    }
}

function timerStart() {

    clearInterval(Interval);
    Interval = setInterval(runTimer, 1000);

    runTimer();
}

function timerStop() {
    clearInterval(Interval);
}


function timerReset() {

    clearInterval(Interval);

    document.getElementById("bar").style.width = "100%";
    document.getElementById("timer-show").innerHTML = "00:00:00";
}

function runTimer() {

    var timePassed = seconds;
    var timeLeft = theLimit - timePassed;
    var timeLeftPercent = timeLeft / theLimit * 100;

    if (timeLeft > 0) {

        document.getElementById("bar").style.width = timeLeftPercent + "%";
        document.getElementById("bar").style.paddingLeft = timeLeftPercent - 150 + "%";
        document.getElementById("bar").innerHTML = timeLeftPercent.toFixed(0) + "%";

    } else {

        timerStop();
        document.getElementById("bar").style.width = 0;
        document.getElementById("btn-run").value = "submit";
    }

    seconds++;

    if (theMode == "exam") {
        timerShow = timeLeft;
    } else {
        timerShow = timePassed;
    }

    document.getElementById("timer-show").innerHTML = toHhMmSs(timerShow).time2;
}

function toHhMmSs(totalSeconds) {
    // https://codingbeautydev.com/

    const seconds2 = showTwoDigit(totalSeconds % 60);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes2 = showTwoDigit((totalMinutes) % 60);
    const hours2 = showTwoDigit(Math.floor(totalMinutes / 60));

    const time2 = hours2 + ":" + minutes2 + ":" + seconds2;

    return { time2, hours2, minutes2, seconds2 };
}

function showTwoDigit(number) {

    let numberShow;
    if (number <= 9) {
        numberShow = "0" + number;
    }
    else {
        numberShow = number;
    }
    return numberShow;
}

/* PP2-V1.01  */