score = 0;

function updateScore() {
    score = score + 1;
    document.getElementById("score").innerHTML = "Score:" + score;
}

function saveScore() {
    localStorage.setItem("score", score);
}

function nextPage() {
    window.location = "activity_2.html";
}

function send() {
    number1 = document.getElementById("number1").value;
    nmuber2 = document.getElementById("nmuber2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "x" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}