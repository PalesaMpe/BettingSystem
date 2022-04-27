var bet = 0.0;
var totAmount = 1000.0;
selected = -1;

document.querySelector(".slot5").addEventListener("click", function () {
  addBet(5.0);
});
document.querySelector(".slot10").addEventListener("click", function () {
  addBet(10.0);
});
document.querySelector(".slot100").addEventListener("click", function () {
  addBet(100.0);
});

document.querySelector(".clear").addEventListener("click", function () {
  bet = 0.0;
  document.querySelector("#betAmount").innerHTML = "Bet Amount: R" + bet;
});

function addBet(betAmount) {
  if (betAmount > totAmount) {
    alert("Insufficient funds");
  } else {
    bet += betAmount;
    document.querySelector("#betAmount").innerHTML = "Bet Amount: R" + bet;
  }
}

function generateDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  diceImage1 = "images/dice" + randomNumber1 + ".png";
  diceImage2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", diceImage1);
  document.querySelector(".img2").setAttribute("src", diceImage2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "🚩PLAYER 1 WINS";
    return 1;
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = "PLAYER 2 WINS🚩";
    return 2;
  } else {
    document.querySelector(".container h1").innerHTML = "DRAW";
    return 0;
  }
}

document.querySelector("#player1").addEventListener("click", function () {
  selected = 1;
});
document.querySelector("#player2").addEventListener("click", function () {
  selected = 2;
});
document.querySelector("#draw").addEventListener("click", function () {
  selected = 0;
});
document.querySelector("button").addEventListener("click", function () {
  if (bet > totAmount) {
    alert("Insufficient funds");
  } else {
    var winner = generateDice();
    if (selected == winner) {
      totAmount += bet * 2;
    } else {
      totAmount -= bet;
    }

    document.querySelector("#totAmount").innerHTML =
      "Total Amount: R" + totAmount;
  }
});
