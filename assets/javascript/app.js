var card = $("#quiz");

var questions = [{

    question: "What year was the First Godzilla Movie Made?",
    answers: ["2016","1954","1998","1978"],
    correctAnswer: "1954"
    //correctAnswerImg: 
    //answerDescription:
}, {

    question: "Whats the name of the Protector of Earth?",
    answers: ["Mothra", "Mecha Godzilla", "King Ghiodohra", "Godzilla"],
    correctAnswer: "Mothra"


}, {

    question: "Whats the hidden message behind the Godzilla Movies?",
    answers: ["Big Dinosaurs are bad", "Pollution", "Nuclear Disarmament", "Climate Change"],
    correctAnswer: "Nuclear Disarmament"
}];



var timer;

var game = {

    correct:0,
    incorrect:0,
    counter: 120,

    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if(game-counter === 0){
            game.done();
        }
    },

    start: function() {
        console.log("button clicked");
        timer = setInterval(game.countdown, 1000);

        $("#secondWrapper").prepend("<h3>Time Remaining: <span id='counter-number'>120</span> Seconds</h3>");
        $("#button").remove();
    
        for(var i = 0; i < questions.length; i++){
            card.append("<h2>" + questions[i].question + "/<h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                card.append("<input type='radio' name='question-'" + i + 
               "'value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }


        card.append("<button id='done'>Done</button>")
    },

    done: function(){
        
        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() === questions[0].correctAnswer) {
              game.correct++;
            }
            else {
              game.incorrect++;
            }
          });
      
          $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val() === questions[1].correctAnswer) {
              game.correct++;
            }
            else {
              game.incorrect++;
            }
          });
      
          $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val() === questions[2].correctAnswer) {
              game.correct++;
            }
            else {
              game.incorrect++;
            }
          });
      
          $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val() === questions[3].correctAnswer) {
              game.correct++;
            }
            else {
              game.incorrect++;
            }
          });
      
          $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val() === questions[4].correctAnswer) {
              game.correct++;
            }
            else {
              game.incorrect++;
            }
          });
      
          $.each($("input[name='question-5']:checked"), function() {
            if ($(this).val() === questions[5].correctAnswer) {
              game.correct++;
            }
            else {
              game.incorrect++;
            }
          });
      
          $.each($("input[name='question-6']:checked"), function() {
            if ($(this).val() === questions[6].correctAnswer) {
              game.correct++;
            }
            else {
              game.incorrect++;
            }
          });
      
          $.each($("input[name='question-7']:checked"), function() {
            if ($(this).val() === questions[7].correctAnswer) {
              game.correct++;
            }
            else {
              game.incorrect++;
            }
          });
      
          this.result();
    },

    result: function() {

        clearInterval(timer);

        $("secondWrapper h3").remove();

        card.html("<h2>All Done!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>InCorrect Answers: " + this.incorrect + "</h3>");
        card.append("<h3>UnAnswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
};

$(document).on("click", "#button", function() {
    game.start();
});

$(document).on("click", "#done", function(){
    game.done();
});