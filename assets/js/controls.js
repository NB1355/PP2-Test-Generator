

function setUp() {
    getMode();
    setTimer();

}

function getMode() {

    document.getElementsByName("set_mode").forEach(radio => {
        if (radio.checked) {
            let theMode = radio.value;
            the-timer.innerHTML = `${theMode} Mode`;
        }
    })
}


function setTimer() {

    let theTimer;

    if (document.getElementsID("timer-off").checked = true) {
        document.getElementsID("timer-on").checked = false;
        theTimer = "off";
    }
    else {
        theTimer = "on"
    }
    setTimerValue.innerHTML = `Timer ${theTimer}`;
}





// ========================================================================================================





