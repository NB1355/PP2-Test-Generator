
function testFunction() {

    // PASSED=========================
    //
    //    testFunc = setTimer;
    //    testFunc = setMode;
    //    testFunc= setCount;
    //    testFunc= setLimit;
    // testFunc = setUp;

    testFunc = questionLoad;
    //      testFunc=randomSelect;
    //      testFunc=questionShow;
    // testFunc=answersShow;
    // testFunc=optionsClear;
    // testFunc=questionShow;

    // ===============================

    console.log("Test", testFunc.name);
    testFunc();
}

document.getElementById("btn-test").addEventListener("click", testFunction);



// function setUptupRun(){
//     setUp();
// }
// document.getElementById("btn-load").addEventListener("click", setUptupRun);

// document.getElementById("btn-load").addEventListener("click", questionLoad);
// document.getElementById("btn-show").addEventListener("click", answersShow);
