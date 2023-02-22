function buttonClick() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;

//   let randomDiceImage = "dice" + randomNumber1 + ".png";

//   let randomImageSource = "/" + randomDiceImage;
  let randomImageSource = "/dice" + randomNumber1 + ".png";

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let randomImageSource2 = "/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "Player 1 Wins";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h2").innerHTML = "Player 2 Wins";
  } else {
    document.querySelector("h2").innerHTML = "It's A Tie!!!";
  }
}
