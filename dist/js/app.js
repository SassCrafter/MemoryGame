window.addEventListener('DOMContentLoaded', () => {
    const memoryGame = new MemoryGame();

    const restartBtn = document.querySelector('.game__restart');

    restartBtn.addEventListener('click', () => {
        memoryGame.reset();
    })
})