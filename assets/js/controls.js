

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
            document.getElementById("getMode-T").innerHTML = `Mode: ${theMode}`;
            // console.log(radio.value);
        }
    })
}


function showTimer() {

    if (document.getElementById('set-timer').checked) {

        let theTimer = "on"

        // for functional test
        document.getElementById("getTimer-T").innerHTML = `Timer: ${theTimer}`;
        // console.log(theTimer);
    }
    else {

        let theTimer = "off"

        // for functional test
        document.getElementById("getTimer-T").innerHTML = `Timer: ${theTimer}`;
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




