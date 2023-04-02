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

    // .........................................................................................................not working why?!
    // var inputs = document.querySelectorAll (".data");
    // for ( var i=0; i<inputs.length; i++){
    //     inputs[i].checked = false;
    // }
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