

document.getElementById("btn-start").addEventListener("click", setUp);

function setUp() {
    getMode();
    getTimer();
    getLimit();
}

function getMode() {

    document.getElementsByName("set_mode").forEach(radio => {
        if (radio.checked) {
            let theMode = radio.value;

            // for functional test
            console.log(radio.value);
            document.getElementById("getMode-T").innerHTML = "=> We are in " + theMode + " mode.";

        }
    })
}

function getTimer() {

    if (document.getElementById('set-timer').checked) {

        let theTimer = "on"

        // for functional test
        document.getElementById("getTimer-T").innerHTML = `=> Timer is ${theTimer}`;
        console.log(theTimer);
    }
    else {

        let theTimer = "off"

        // for functional test
        document.getElementById("getTimer-T").innerHTML = `=> Timer is ${theTimer}`;
        console.log(theTimer);
    }
}

function getLimit() {

    let theLimit = document.getElementById('set-limit').value;

    // for functional test
    document.getElementById("getLimit-T").innerHTML = `=> Time limit is ${theLimit}`;
    console.log(theLimit);

}