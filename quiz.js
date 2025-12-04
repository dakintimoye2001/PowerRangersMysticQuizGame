console.log("quiz.js loaded");
alert("JS is running");


document.body.style.backgroundColor = ' #9B1B30';


document.querySelector('h1').style.color = '#D4AF37';



// Red Ranger create output report 

/* 
document.createElement('p')


paragraph.id = 'redresult'; 
paragraph.innerHTML = 'The correct answer is {score}';


document.body.appendChild(paragraph);

*/

// Removes all questions execpt 1 while 1 is up

/*
document.getElementById('q1').hidden = false;

document.getElementById('q2').hidden = true;
document.getElementById('q3').hidden = true;

*/

let currentQuestion = 1;
const totalQuestions = 10;


const ShowQuestion = (number) => {
    // hide all questions first 
    for (let i = 1; i<= totalQuestions; i++) {
        document.getElementById('q' + i).hidden = true;
    }
    // show current question 
     document.getElementById('q' + number).hidden = false;
}


document.getElementById('nextBtn').addEventListener('click', function() {
    // Hide current question
})
    document.getElementById('q' + currentQuestion).hidden = true;

    // Move to the next question 
    currentQuestion++

    if (currentQuestion <= totalQuestions)  {
        // Show the next question 
    document.getElementById('q' + currentQuestion).hidden = false; 


} else {
    alert('Quiz finished');
     // Optionally reset quiz
        // currentQuestion = 1;
        // document.getElementById('q1').hidden = false;
    
};

// When someone click the check answer button 

let eventTarget = document.querySelector('q + number');

eventTarget.addEventListener('click', function(){


});

// Code when question one check answered is clicked 


document.querySelectorAll('.submitBtn').forEach(btn => {
    btn.onclick = function() {
        btn.style.backgroundColor = '#9B1B30';
    };
});

// code when next is clicked 




// code when back is clicked 







console.log("JS is working");
