class MemoryGame {
    constructor() {
        this.cardsObjs = [
            {
                path: './img/icons/html5.svg',
                name: 'html'
            },
            {
                path: './img/icons/macbook.svg',
                name: 'macbook'
            },
            {
                path: './img/icons/css-3.svg',
                name: 'css'
            },
            {
                path: './img/icons/javascript.svg',
                name: 'js'
            },
            {
                path: './img/icons/react.svg',
                name: 'react'
            },
            {
                path: './img/icons/sass.svg',
                name: 'sass'
            },
            {
                path: './img/icons/html5.svg',
                name: 'html'
            },
            {
                path: './img/icons/macbook.svg',
                name: 'macbook'
            },
            {
                path: './img/icons/css-3.svg',
                name: 'css'
            },
            {
                path: './img/icons/javascript.svg',
                name: 'js'
            },
            {
                path: './img/icons/react.svg',
                name: 'react'
            },
            {
                path: './img/icons/sass.svg',
                name: 'sass'
            },
        ];


        this.shuffledIcons = this.cardsObjs.sort(() => Math.random() - 0.5);

        this.count = 0;
        this.timerCount = 0;

        this.correctGueses = [];



        this.createElements();


        this.showCard();
    }

    createElements() {
        const game = document.querySelector('.game');
        const mainContainer = document.createElement('div');
        mainContainer.classList.add('game__cards');

        // Create cards
        for (let i = 0; i < this.cardsObjs.length; i++) {
            const cardEl = document.createElement('div');
            const cardElFront = document.createElement('div');
            const cardElBack = document.createElement('div');

            // Add classes
            cardEl.classList.add('game__card');
            cardElFront.classList.add('game__card-side', 'game__card-side--front');
            cardElBack.classList.add('game__card-side', 'game__card-side--back');

            cardElBack.innerHTML = `<img src="${this.cardsObjs[i].path}" class="game__card-icon"></img>`;
            cardEl.dataset.icon = this.cardsObjs[i].name;

            // Add to main container
            cardEl.appendChild(cardElFront);
            cardEl.appendChild(cardElBack);
            mainContainer.appendChild(cardEl);
        }
        game.appendChild(mainContainer);

    }

    removeElements() {
        const mainContainer = document.querySelector('.game__cards');
        if (mainContainer) {
            mainContainer.remove();
        }
    }

    showCard() {
        const cards = Array.from(document.querySelectorAll('.game__card'));
        let cardsArr = [];
        cards.forEach(card => {
            card.addEventListener('click', () => {
                this.count++;
                if (this.count < 3) {
                    card.classList.add('active');
                    cardsArr.push(card);
                    if (cardsArr.length === 2) {
                        this.checkTwoCards(cardsArr);
                        cardsArr = [];
                    }
                }
            })
        })
    }


    checkTwoCards(cards) {
        const cardOne = cards[0];
        const cardTwo = cards[1];

        if (cardOne.dataset.icon === cardTwo.dataset.icon) {
            this.correctGueses.push(cardOne);
            this.correctGueses.push(cardTwo);
            setTimeout( () => {
                cardOne.style = "opacity: 0; visibility: hidden; pointer-events: none";
                cardTwo.style = "opacity: 0; visibiltiy: hidden; pointer-events: none";
            }, 500);
            if (this.correctGueses.length === this.cardsObjs.length) {
                this.removeElements();
            }
        } else {
            setTimeout( () => {
                cards.forEach(card => {card.classList.remove('active')});
            }, 500);
        }
        this.count = 0;
    }


    reset() {
        this.shuffledIcons = this.cardsObjs.sort(() => Math.random() - 0.5);
        this.count = 0;
        this.removeElements();
        this.createElements();
        this.showCard();
    }
}