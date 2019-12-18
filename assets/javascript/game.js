
$(document).ready(function () {

    // declare initial variables 

    var randomNumber = 0;
    var score = 0;
    var wins = 0;
    var losses = 0;
    var blueValue = 0;
    var orangeValue = 0;
    var greenValue = 0;
    var whiteValue = 0;

    // resets the game 

    function gameReset() {
        score = 0;
        wins = 0;
        losses = 0;
        numberGenerator();

        $("#random-number").text("Match this number: " + randomNumber)

        $("#users-score").text("Your score: " + score)

        $("#wins").text("Wins: " + wins)

        $("#losses").text("Losses: " + losses)

    }

    function numberGenerator() {
        randomNumber = Math.floor(Math.random() * (101) + 19);
        randomBlueValue = Math.floor(Math.random() * (12) + 1);
        randomGreenValue = Math.floor(Math.random() * (12) + 1);
        randomOrangeValue = Math.floor(Math.random() * (12) + 1);
        randomWhiteValue = Math.floor(Math.random() * (12) + 1);
    }

    function letsPlay() {

        score = 0;
        numberGenerator();

        // display the the game stats  

        $("#random-number").text("Match this number: " + randomNumber)

        $("#users-score").text("Your score: " + score)

        $("#wins").text("Wins: " + wins)

        $("#losses").text("Losses: " + losses)

        // generate random number to try to reach 


        $("#random-number").text("Match this number: " + randomNumber)

        // generate on clicks for the crystal buttons; on click of .btn-crystal, add the value to score 

        $("#blue").attr("value", randomBlueValue);
        $("#green").attr("value", randomGreenValue);
        $("#orange").attr("value", randomOrangeValue);
        $("#white").attr("value", randomWhiteValue);

    }

    $(".btn-crystal").on("click", function () {
        console.log(this);
        console.log($(this));
        var number = $(this).attr("value");
        score = score + parseFloat(number);
        console.log(number);
        $("#users-score").text("Your score: " + score);

        // conditional statement

        if (score === randomNumber) {
            alert("You Win!"); 
            wins++
            $("#wins").text("Wins: " + wins)
            letsPlay();

        }

        if (score > randomNumber) {
            alert("You Lose :("); 
            losses++
            $("#losses").text("Losses: " + losses)
            letsPlay();

        }



    })


    letsPlay();

// when button is clicked, runs the game reset function to clear the board

    $(".btn-warning").on("click", function () {
        gameReset();
    })
})

