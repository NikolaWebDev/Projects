// Function constructor
(function(){

function Question(questions, answers, correct){
    this.questions = questions;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestions =
function() {
    console.log(this.questions);

    for(var i = 0; i < this.answers.length; i++){
        console.log(i + ': ' + this.answers[i]);
    }
}

Question.prototype.checkAnswer =
function(ans, callback) {
    if(ans === this.correct){
        console.log('Correct answer!');
       sc = callback(true);
    }else{
        console.log('Wrong answer. Try again.')
        sc = callback(false);
    }
    this.displayScore(sc);
}

Question.prototype.displayScore =
function(score){
    console.log('Your current score is: ' + score);
    console.log('------------------------------------')
}

var q1 = new Question('Is JavaScript the coolest '+
'language in the world', ['Yes', 'No'], 0);
var q2 = new Question('What is the name of this' +
' course\'s teacher?', ['John', 'Mike', 'Jonas'], 2);
var q3 = new Question('What does best describe coding',
['Hard', 'Fun', 'Borring'], 1);


var questions = [q1, q2, q3];

function score(){
    var sc = 0;
    return function(correct){
        if(correct){
            sc++;
        }
        return sc;
    }
}

var keepScore = score();

function nextQuestion(){
        var rand = Math.floor(Math.random() * questions.length);
        questions[rand].displayQuestions();

        var answer = prompt('Please enter the correct answer');
        if(answer !== 'exit'){
            questions[rand].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();