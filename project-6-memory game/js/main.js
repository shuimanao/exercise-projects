'use strict';

const cardsArray = ["card-1", "card-1", "card-2", "card-2", "card-3", "card-3", "card-4", "card-4", "card-5", "card-5", "card-6", "card-6", "card-7", "card-7", "card-8", "card-8", "card-9", "card-9"];

let cards = document.querySelectorAll("div");
cards = [...cards];

const startTime = new Date().getTime();

let activeCard = "";
const activeCards = [];

const gamePairs = cards.length / 2;
let gameResult = 0;

const clickCard = function () {
    activeCard = this;
    
    if(activeCard == activeCards[0]) return; // jeśli ktoś kliknął w ten sam element, zakończ działanie funkcji, nic więcej nie rób
    
    activeCard.classList.remove("hidden");


    // czy to 1 kliknięcie
    if (activeCards.length === 0) {
        activeCards[0] = activeCard;
        return;
    }

    // czy to 2 kliknięcie
    else {
        cards.forEach(card => card.removeEventListener("click", clickCard));
        activeCards[1] = activeCard;
        setTimeout(function () {
            if (activeCards[0].className === activeCards[1].className) {
                activeCards.forEach(card => card.classList.add("off"));
                gameResult++;
                cards = cards.filter(card => !card.classList.contains("off")); // wykluczenie elementów klikniętych które są prawidłowe z listy            
                if(gameResult == gamePairs) {
                    const endTime = new Date().getTime();
                    const gameTime = (endTime - startTime)/1000;
                    alert(`Gratulacje, udało Ci się! Twój wynik to: ${gameTime} sekund`);
                    location.reload(); //odświeżenie strony i rozpoczęcie gry na nowo
                };
            } else {
                activeCards.forEach(card => card.classList.add("hidden"))
            };

            activeCard = ""; // reset do stanu wyjściowego
            activeCards.length = 0;
            cards.forEach(card => card.addEventListener("click", clickCard)); // przywracamy nasłuchiwanie

        }, 500);
    };
};

const init = function () {
    cards.forEach(card => { //funkcja strzałkowa
        const position = Math.floor(Math.random() * cardsArray.length);
        card.classList.add(cardsArray[position]);
        cardsArray.splice(position, 1);
    })

    setTimeout(function () {
        cards.forEach(card => {
            card.classList.add("hidden");
            card.addEventListener("click", clickCard);
        })
    }, 2000);
};

init();