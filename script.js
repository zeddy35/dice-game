document.querySelector("button").addEventListener("click", function () {
    
    var firstDice = Math.floor(Math.random() * 6) + 1;
     
    var img1 = document.getElementsByClassName("img1")[0];
    var randomSource1 = "images/dice" + firstDice + ".png";
    img1.setAttribute("src", randomSource1);
    
    var secondDice = Math.floor(Math.random() * 6) + 1;

    var img2 = document.getElementsByClassName("img2")[0];

    var randomSource2 = "images/dice" + secondDice + ".png";

    img2.setAttribute("src", randomSource2);

    


    if (firstDice > secondDice) {
        document.querySelector("h1").innerHTML = "<h1>🎉 Player 1 wins!</h1>";
    } else if (firstDice < secondDice) {
        document.querySelector("h1").innerHTML = "<h1>🎉 Player 2 wins!</h1>";
    } else {
        document.querySelector("h1").innerHTML = "<h1>&#128531; It's a draw !</h1>";
    }

    document.querySelector("h6").textContent = "Press to play again!";
});
