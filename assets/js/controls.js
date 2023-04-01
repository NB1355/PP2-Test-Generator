

function setUp() {
    getMode();
    getTimer();
    getLimit();
    clock();
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


function getTimer() {

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


function getLimit() {

    let theLimit = document.getElementById('set-limit').value;

    // for functional test
    document.getElementById("getLimit-T").innerHTML = `Limit: ${theLimit}`;
    // console.log(theLimit);
}


// ========================================================================================================

function getStatus (){

    var theStatus = document.getElementById("btn-load").value;
    
     // for functional test
    //  console.log("test!!!!!!!!!!");
    //  console.log(theStatus);    
}




