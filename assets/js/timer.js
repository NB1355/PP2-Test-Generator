

function clock() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    setTimeout(clock, 1000);
}


function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}


function getTheTime() {

    // var today = new Date();
    // var theTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const d = new Date();
    let theTime = d.getTime();


    // for functional test
    console.log(theTime);
}