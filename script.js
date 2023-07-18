//1st part
let parentDiv = document.querySelector('#card-section');

let cardsArray = [
    {
        'name': 'lemon',
        'img': 'pictures/lemon.png',
    },
    {
        'name': 'orange',
        'img': 'pictures/orange.png',
    },
    {
        'name': 'pineapple',
        'img': 'pictures/pineapple.png',
    },
    {
        'name': 'strawberry',
        'img': 'pictures/strawberry.png',
    },
    {
        'name': 'tomato',
        'img': 'pictures/tomato.png',
    },
    {
        'name': 'watermelon',
        'img': 'pictures/watermelon.png',
    }
];

//2nd part
let gameCard = cardsArray.concat(cardsArray);
let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());

//3rd part
let clickCount = 0;
let firstCard = "";
let secondCard = "";

//4th part
let card_matches = () => {
    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((curElem) => {
        curElem.classList.add('card_match');
    });
};

//5th part
const resetGame = () => {
    firstCard = "";
    secondCard = "";
    clickCount = 0;
    let card_selected = document.querySelectorAll(".card_selected");
    card_selected.forEach((curElem) => {
        curElem.classList.remove('card_selected');
    });
};

//6th part
parentDiv.addEventListener('click', (event) => {
    let curCard = event.target;
    if (curCard.id === 'card-section') {
        return false;
    }
    clickCount++;
    if (clickCount < 3) {
        if (clickCount === 1) {
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }
        else {
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }
        if (firstCard !== "" && secondCard !== "") {
            if (firstCard === secondCard) {
                setTimeout(() => {
                    card_matches();
                    resetGame();
                }, 1000);
            } else {
                setTimeout(() => {
                    resetGame();
                }, 1000);
            }
        }
    }
});

//7th part
for (let i = 0; i < shuffledChild.length; i++) {
    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = shuffledChild[i].name;

    const front_div = document.createElement('div');
    front_div.classList.add('front-card');

    const back_div = document.createElement('div');
    back_div.classList.add('back-card');
    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

    childDiv.appendChild(front_div);
    childDiv.appendChild(back_div);
    parentDiv.appendChild(childDiv);
}
