
window.onload = setUp;

// Step1. Choose/Load a Dataset if availavble + Update infoBox  
document.getElementById("btn-get").addEventListener("click", getData);

// Step2. Loads date and strats the process concidering to SetUp
document.getElementById("btn-load").addEventListener("click", questionsLoad);



// document.getElementById("btn-reset").addEventListener("click", resetQuestions);
// document.getElementById("btn-show").addEventListener("click", answersShow);



// ==============TESTS [to be deleted] ======================================== 

// document.getElementById("btn-test").addEventListener("click", clock);


// document.getElementById("btn-test").addEventListener("click", answersRecord);

// document.getElementById("btn-test").addEventListener("click", setUp);

// document.getElementById("btn-test").addEventListener("click", getTheTime);

document.getElementById("btn-test").addEventListener("click", setTimer);


document.getElementById("mode-learn").onclick = getMode;
document.getElementById("mode-exam").onclick = getMode;

document.getElementById("timer-on").onclick = setTimer;
document.getElementById("timer-off").onclick = setTimer


;