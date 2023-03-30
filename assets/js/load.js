let queryCount = 7; // number of the selected questions

var select = [];


document.getElementById("btn-load").addEventListener("click", questionsLoad);


function questionsLoad() {

    fetch("assets/data/default.json") // link later to select and upload process -----------#check
        .then(response => {
            return response.json();
        })
        .then(data => {

            randomSelect(data);

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