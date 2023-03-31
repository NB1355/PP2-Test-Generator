let queryCount = 7; // number of the selected questions

var select = [];
let s = 0;

document.getElementById("btn-load").addEventListener("click", questionsLoad);
document.getElementById("btn-show").addEventListener("click", answersShow);




function questionsLoad() {

    fetch("assets/data/default.json") // link later to select and upload process -----------#check
        .then(response => {
            return response.json();
        })
        .then(data => {

            randomSelect(data);
            list = data; //Creates Global Variable OPT: use local possible?

            questionShow();

            // for functional test
            console.log(data);

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

    optionsClear();

    let xCorrects = list.questions[q].corrects

    console.log(xCorrects);

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
}



function optionsClear() {
    // TBD comennted out => why not working ? =================================================#Check
    // document.querySelectorAll("#my-test input").checked = false;
    // document.getElementsByName("pro-event").checked = false;

    let checkboxes = document.getElementsByTagName("input");
    for (var checkbox of checkboxes) {
        checkbox.checked = false;
    }
}

function answersShow() {

    console.log("answersShow!!!!!!!!!!!");

    let xShow = document.getElementById("btn-show").value;

    if (xShow == "Show Answers") {
        opacity = 0.5;
        document.getElementById("btn-show").value = "Hide Answers";
    } else {
        opacity = 0.01;
        document.getElementById("btn-show").value = "Show Answers";
    }
}