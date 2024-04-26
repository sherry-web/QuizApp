// Array to store question IDs
var questionIds = ["q1", "q6", "q11", "q16", "q21"];

// Function to handle answering a single question
function answerQuestion(questionId) {
    // Get the input value for the current question
    var answer = document.getElementById(questionId).value.trim().toUpperCase();

    // Get the corresponding result element for the current question
    var resultElement = document.getElementById(questionId + "-result");

    // Check if the answer is correct
    if (questionId === "q1" && answer === "KRUGER NATIONAL PARK") {
        document.getElementById(questionId).style.borderColor = "green";
        resultElement.innerHTML = "Correct!";
        resultElement.style.color = "green";
    } else if (questionId === "q6" && answer === "PI") {
        document.getElementById(questionId).style.borderColor = "green";
        resultElement.innerHTML = "Correct!";
        resultElement.style.color = "green";
    } else if (questionId === "q11" && answer === "CARBON DIOXIDE") {
        document.getElementById(questionId).style.borderColor = "green";
        resultElement.innerHTML = "Correct!";
        resultElement.style.color = "green";
    } else if (questionId === "q16" && answer === "10 MAY 1994") {
        document.getElementById(questionId).style.borderColor = "green";
        resultElement.innerHTML = "Correct!";
        resultElement.style.color = "green";
    } else if (questionId === "q21" && answer === "PRETORIA") {
        document.getElementById(questionId).style.borderColor = "green";
        resultElement.innerHTML = "Correct!";
        resultElement.stylecolor = "green";
    } else {
        // If the answer is incorrect, highlight the input field in red
        document.getElementById(questionId).style.borderColor = "red";
        resultElement.innerHTML = "Incorrect";
        resultElement.style.color = "red";
    }

    // Automatically focus on the next question input field
    var nextQuestionIdIndex = questionIds.indexOf(questionId) + 1;
    if (nextQuestionIdIndex < questionIds.length) {
        var nextQuestionId = questionIds[nextQuestionIdIndex];
        document.getElementById(nextQuestionId).focus();
    } else {
        // If all questions are answered, show the final result
        showFinalResult();
    }
}

// Function to show the final result after answering all questions
function showFinalResult() {
    // Display result message
    var correctAnswers = questionIds.reduce(function(acc, questionId) {
        var answer = document.getElementById(questionId).value.trim().toUpperCase();
        if (questionId === "q1" && answer === "KRUGER NATIONAL PARK") {
            return acc + 1;
        } else if (questionId === "q6" && answer === "PI") {
            return acc + 1;
        } else if (questionId === "q11" && answer === "CARBON DIOXIDE") {
            return acc + 1;
        } else if (questionId === "q16" && answer === "10 MAY 1994") {
            return acc + 1;
        } else if (questionId === "q21" && answer === "PRETORIA") {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);

    var resultMessage;
    if (correctAnswers === 5) {
        resultMessage = "Congratulations! You got all 5 answers correct";
    } else {
        resultMessage = "Too Bad! You only got " + correctAnswers + " answers correct";
    }
    document.getElementById("result").innerHTML = resultMessage;
}

// Listen for Enter key press events on each question input field
questionIds.forEach(function(questionId) {
    document.getElementById(questionId).addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default form submission behavior
            answerQuestion(questionId);
        }
    });
});

// Submit button click event listener
document.getElementById("submit-button").addEventListener("click", showFinalResult);