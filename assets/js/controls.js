

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
            // console.log(radio.value);
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


// ========================================================================================================

function getStatus (){

    var theStatus = document.getElementById("btn-load").value;
    return theStatus;
    
     // for functional test
    //  console.log("test!!!!!!!!!!");
    //  console.log(theStatus);    
}




