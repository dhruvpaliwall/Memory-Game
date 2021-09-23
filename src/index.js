document.addEventListener("DOMContentLoaded", () => {
  const cardsArray = [
    {
      name: "cheeseBurger",
      img: "src/images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "src/images/fries.png",
    },
    {
      name: "hotdog",
      img: "src/images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "src/images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "src/images/milkshake.png",
    },
    {
      name: "pizza",
      img: "src/images/pizza.png",
    },
    {
      name: "cheeseBurger",
      img: "src/images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "src/images/fries.png",
    },
    {
      name: "hotdog",
      img: "src/images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "src/images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "src/images/milkshake.png",
    },
    {
      name: "pizza",
      img: "src/images/pizza.png",
    },
  ];
  cardsArray.sort(() => 0.5 - Math.random());
  console.log(cardsArray);

  const grid = document.querySelector(".grid");
  let cardsChosen = [];
  let cardsChosenIds = [];
  const cardsWon = [];
  var attempts = 0;

  function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "src/images/blank.png");
      card.setAttribute("id", "transition");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }
  function flipcard(event) {
    attempts = attempts + 1;
    let cardId = event.target.getAttribute("data-id");
    event.target.setAttribute("src", cardsArray[cardId].img);
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenIds.push(cardId);

    console.log(cardsChosen);
    if (cardsChosen.length == 2) {
      setTimeout(checkCard, 500);
    }
  }

  function checkCard() {
    let string = "No MatchFound!!<br>";
    const cards = document.querySelectorAll("img");
    if (cardsChosenIds[0] === cardsChosenIds[1]) {
      document.getElementsByClassName("won")[0].innerHTML =
        "You have chosen the same card";
      cards[cardsChosenIds[0]].setAttribute("src", "src/images/blank.png");
      cards[cardsChosenIds[1]].setAttribute("src", "src/images/blank.png");
      document.querySelector(".header").innerHTML =
        " Your score:" + cardsWon.length + "<br>No. of atempts:" + attempts / 2;
    } else if (cardsChosen[0] === cardsChosen[1]) {
      document.getElementsByClassName("won")[0].innerHTML =
        "You Have Found a Match";
      cards[cardsChosenIds[0]].setAttribute("src", "src/images/white.png");
      cards[cardsChosenIds[1]].setAttribute("src", "src/images/white.png");
      cards[cardsChosenIds[0]].removeEventListener("click", flipcard);
      cards[cardsChosenIds[1]].removeEventListener("click", flipcard);
      cardsWon.push(cardsChosen);
      document.querySelector(".header").innerHTML =
        " Your score:" + cardsWon.length + "<br>No. of atempts:" + attempts / 2;
      document.getElementsByClassName("won")[0].innerHTML =
        "You Have Found a Match";
      document.getElementsByClassName("loose")[0].innerHTML = "";
    } else {
      cards[cardsChosenIds[0]].setAttribute("src", "src/images/blank.png");
      cards[cardsChosenIds[1]].setAttribute("src", "src/images/blank.png");
      document.querySelector(".header").innerHTML =
        " Your score:" + cardsWon.length + "<br>No. of atempts:" + attempts / 2;
      document.getElementsByClassName("won")[0].innerHTML = "";
      document.getElementsByClassName("loose")[0].innerHTML += string;
    }
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == 6) {
      document.querySelector(".header").innerHTML =
        "Congratulation You Have Won The Game!!<br> No. of attempts: " +
        attempts / 2;
      document.getElementsByClassName("won")[0].innerHTML = "";
      document.getElementsByClassName("loose")[0].innerHTML = "";
    }
  }

  createBoard();
});
