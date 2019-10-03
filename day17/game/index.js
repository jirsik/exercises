class Chip {
    constructor (value, x, y) {
        this.value = value;
        this.x = x;
        this.y = y;
    }
    render(chip) {
        const playground = document.querySelector('.list');
        const chipDom = document.createElement('div');
        chipDom.innerHTML = `<div class="chip${chip.value}" style="left: ${chip.x}px; top: ${chip.y}px;">${chip.value}</div>`;
        chipDom.querySelector('div').addEventListener('click', () => {
            round.score += chip.value;
            round.remaining--;
            document.querySelector('.score').textContent = `Score: ${round.score}`;
            chipDom.querySelector('div').className = 'none';
        });
        setTimeout(()=>{
            chipDom.querySelector('div').className = 'none';
            round.remaining--;
        }, randomT());
        playground.appendChild(chipDom);
    }
}

class Game {
    constructor() {
        this.score = 0;
        this.chips = [];
        this.remaining = this.chips.length;
    }
    addChip (value, x, y) {
        const newChip = new Chip (value, x, y);
        this.chips.push(newChip);
        newChip.render(newChip);
    }
}

let round;

const randomX = () => Math.floor(Math.random()*750);
const randomY = () => Math.floor(Math.random()*350);
const randomV = () => {
    let result = Math.floor(Math.random()*3) + 1;
    if (result === 3) {result = 5;}
    return result;
}
const randomT = () => Math.floor(Math.random()*4000) + 1000;

const startGame = (numberOfChips) => {
    round = new Game();
    for (i=0; i<numberOfChips; i++) {
        round.addChip(randomV(),randomX(),randomY());
        round.remaining++;
    }
    timer = setInterval(()=>{
        round.addChip(randomV(),randomX(),randomY());
        round.remaining++;
    }, 300);
    setTimeout(()=>{
        clearInterval(timer)
        alert('GAME OVER!!');    
    }, 20000);
};

document.addEventListener('DOMContentLoaded', ()=>{
    startGame(10);
});