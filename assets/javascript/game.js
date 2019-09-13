
$("document").ready(function() {
        var crystal1 = Math.floor(Math.random()*12) + 1;
        var crystal2 = Math.floor(Math.random()*12) + 1;
        var crystal3 = Math.floor(Math.random()*12) + 1;
        var crystal4 = Math.floor(Math.random()*12) + 1;
        var wins = 0;
        var loses = 0;
        var currentScore = 0;
        var targetScore = Math.floor(Math.random()*(120-19+1)+19);

function resetGame () {
    crystal1 = Math.floor(Math.random()*12) + 1;
    crystal2 = Math.floor(Math.random()*12) + 1;
    crystal3 = Math.floor(Math.random()*12) + 1;
    crystal4 = Math.floor(Math.random()*12) + 1;
    targetScore = Math.floor(Math.random()*(120-19+1)+19);
    currentScore = 0;
}

function scoreCheck(){
    if(currentScore === targetScore) {
    alert("Correct")
    wins ++;
    resetGame ();
    updateScore ();
    }else if (currentScore > targetScore) {
        alert ("Try Again");
        loses ++;
        resetGame ();
        updateScore ();
    }}

function updateScore () {
    $(".winner").text(wins);
    $(".loser").text(loses);
    resetDom ();
}

function resetDom () {
    $(".target").text(targetScore)
    $(".current").text(currentScore)

}

$("#circle").on('click', function(){
    currentScore += crystal1;
    $(".current").text(currentScore);
    scoreCheck();
    })

$("#diamond").on('click', function(){
    currentScore += crystal2;
    $(".current").text(currentScore);
    scoreCheck();
    })

$("#pyramid").on('click', function(){
    currentScore += crystal3;
    $(".current").text(currentScore);
    scoreCheck();
    })

$("#heart").on('click', function(){
    currentScore += crystal4;
    $(".current").text(currentScore);
    scoreCheck();
    })

    updateScore();
    console.log(targetscore)
    
    }
)


