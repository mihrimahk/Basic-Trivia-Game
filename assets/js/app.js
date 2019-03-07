$(document).ready(function(){
$("#start").on('click',function(){
    game.start();
    
});
    $(document).on('click','#end',function(){
        game.done();
    })
   
//creating all questions in an array
var  questions =[{
     question: "Who are the native people of Australia?",
     answers: ["Aleuts","Assiniboine","Arkansans","Aborigines"],
     correctAnswer: "Aborigines",

},{  
     question: "Most followers of Zoroastrianism live in:",
     answers: ["The United States","Iran","India","France"],
     correctAnswer: "India",

},{
     question: "Which of these is not a computer operating system?",
     answers: ["Apple OS X","Linux","Photoshop","Microsoft Windows"],
     correctAnswer:"Photoshop",

},{ 
    question: "In what form does the Internet move information between users’ computers?",
    answers: ["Data packets","Encrypted letters","Complete digital files","Elfish tongue"],
    correctAnswer: "Data packets",

},{ 
    question: "Which of the following is a computer operating system?",
    answers: ["Xerox","Borax","Linux","Xenon"],
    correctAnswer: "Linux",
},{
    question: "From what language do French and Spanish come?",
    answers: ["Greek","Latin","Hebrew","German"],
    correctAnswer: "Latin",
},{
    question: "Which of these is not a Romance language?",
    answers: ["Portuguese","Spanish","Romanian","Russian"],
    correctAnswer: "Russian",
},{
    question: "Which of these is the main language of Iran?",
    answers: ["English","Vietnamese","Farsi","Arabic"],
    correctAnswer: "Farsi",
},{
    question: "The last letter of the Greek alphabet is:",
    answers: ["omicron","omega","alpha","epsilon"],
    correctAnswer: "omega",
},{
    question: "Which of these seas is the largest?",
    answers: ["Dead Sea","Sea of Okhotsk","Mediterranean Sea","Sea of Japan"],
    correctAnswer: "Mediterranean Sea",
}];


// creating game variables 
var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,
//timer check function
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if ( game.counter < 0){
            console.log ("Time is up!");
            game.done();
        }
    },
    // start game
    start : function(){
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend("<h2 id='time'>Time Reamining: <span id='counter'>30</span> seconds </h2>");
        $("#start").remove();
        for (var i=0 ; i<questions.length; i++){
            $("#subwrapper").append("<h2>"+ questions[i].question + "</h2>");
            for (var j=0; j< questions[i].answers.length; j++){
                $("#subwrapper").append("<input type='radio' name= 'question-" + i + "'value='"+ questions[i].answers[j]+ "'>" +questions[i].answers[j]);
            }   
        }
        $("#subwrapper").append("<br><button id='end'>Done</button>");
    },
    // completed the game cheking the answers
    done : function(){
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() === questions[1].correctAnswer) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() === questions[2].correctAnswer) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() === questions[3].correctAnswer) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() === questions[4].correctAnswer) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() === questions[5].correctAnswer) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() === questions[6].correctAnswer) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() === questions[7].correctAnswer) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-8']:checked"), function () {
            if ($(this).val() === questions[8].correctAnswer) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-9']:checked"), function () {
            if ($(this).val() === questions[9].correctAnswer) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
     // reaching result function   
        this.result();

    },
    
    // Transfering all results to the page
    result : function(){
        clearInterval(timer);
        $("#subwrapper h2").remove();
        $("#subwrapper").html("<h2>All Done!</h2>");
        $("#subwrapper").append("<h3>Correct Answer: "+this.correct +"</h3>");
        $("#subwrapper").append("<h3>Incorrect Answer: "+this.incorrect +"</h3>");
        $("#subwrapper").append("<h3>Unanswered: "+(questions.length-(this.correct+this.incorrect))+"</h3>");
        $("#subwrapper").append("<a href='index.html' class='btn'>Try Again!</a>");
    }
}
});