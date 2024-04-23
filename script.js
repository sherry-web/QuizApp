// Function to count correct answers and print results to document 
function myFunction() {

    // Create variable to count correct answers 
    var correctAnswers = 0;

    // Create variables for each question's input value
    var q1 = document.getElementById("q1").value.toUpperCase();
    var q2 = document.getElementById("q2c").checked;
    var q3 = document.getElementById("q3").value.toUpperCase();
    var q4 = document.getElementById("q4a").checked;
    var q5 = document.getElementById("q5").value.toUpperCase();
    var q6 = document.getElementById("q6").value.toUpperCase();
    var q7 = document.getElementById("q7c").checked;
    var q8 = document.getElementById("q8").value.toUpperCase();
    var q9 = document.getElementById("q9").value.toUpperCase();
    var q10 = document.getElementById("q10d").checked;
    var q11 = document.getElementById("q11b").checked;
    var q12 = document.getElementById("q12").value.toUpperCase();
    var q13 = document.getElementById("q13b").checked;
    var q14 = document.getElementById("q14").value.toUpperCase();
    var q15 = document.getElementById("q15a").checked;
    var q16 = document.getElementById("q16d").checked;
    var q17 = document.getElementById("q17").value.toUpperCase();
    var q18 = document.getElementById("q18c").checked;
    var q19 = document.getElementById("q19").value.toUpperCase();
    var q20 = document.getElementById("q20").value.toUpperCase();
    var q21 = document.getElementById("q21").value.toUpperCase(); // Additional question

    // Assign correct answers to field inputs
    if (q1 === "KRUGER NATIONAL PARK") {
        correctAnswers += 1;
    } 
    if (q2) {
        correctAnswers += 1;
    } 
    if (q3 === "PI" || q3 === "PI") {
        correctAnswers += 1;
    } 
    if (q4) {
        correctAnswers += 1;
    } 
    if (q5 === "CARBON DIOXIDE") {
        correctAnswers += 1;
    } 
    if (q6 === "10 MAY 1994") {
        correctAnswers += 1;
    } 
    if (q7) {
        correctAnswers += 1;
    } 
    if (q8 === "5") {
        correctAnswers += 1;
    } 
    if (q21 === "PRETORIA") { // Additional question
        correctAnswers += 1;
    }

    // Print results to document depending on outcome
    if (correctAnswers === 21) {
        document.getElementById("result").innerHTML = "Congratulations! You got all 21 answers correct";
    } else if (correctAnswers >= 15) {
        document.getElementById("result").innerHTML = "Congratulations! You got " + correctAnswers + " answers correct";
    } else if (correctAnswers >= 10) {
        document.getElementById("result").innerHTML = "You got " + correctAnswers + " answers correct";
    } else if (correctAnswers >= 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got " + correctAnswers + " answers correct";
    } else if (correctAnswers === 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got 1 answer correct";
    } else if (correctAnswers === 0) {
        document.getElementById("result").innerHTML = "You didn't answer a single answer correctly!";
    }

    // Print correct answers to form
    document.getElementById("answers").innerHTML = "Correct answers: (1)China (2)Chile (3)Victoria (4)Canberra (5)Florida (6)Tangent (7)Triskaidecagon (8)5 (9)90 (10)150 (11)Bromine (12)Salt (13)deliquescence (14)Aluminium (15)Hydrogen (16)1914 (17)Austria (18)Dallas (19)France (20)10 (21)Pretoria";

    // Reset contents of form
    document.getElementById("quiz-form").reset();
}