var readlineSync = require ('readline-sync');
var score = 0;

var userName = readlineSync.question("What's your name ? ");
console.log("Welcome " + userName + ", to DO YOU KNOW Ashish ");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer){
    console.log("Right");
    score = score + 1;
  }
  else {    
      console.log("Wrong!!The correct answer is "+answer);        
  }
  console.log("Current Score : " + score);
  console.log("------------------------------");
}

var dataRaju = {
  name: "Raju",
  score: 7
}
 var dataSumit =
  { 
    name: "Sumit",
    score: 5                
 }


var questions = [{
  question: "Who is my favorite Hero? ",
  answer: "Mahesh Babu"
},
 {
  question: "Which is my favorite movie? ",
  answer: "3 Idiots"
}
,{
  question: "Which is my favorite sad song? ",
  answer: "Dil Sambhal Jara"
} 
,{
  question: "Which is my favorite singer? ",
  answer: "Arijit Singh"
}
,{
  question: "Which is my favorite game? ",
  answer: "Volleyball"
}

,{
  question: "Which is my favorite Web - Series ",
  answer: "Kota Factory"
}];

for (var i = 0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Yep!!, You total SCORED " +score);

// console.log("You higher Score ", dataRaju.score > dataSumit.score);