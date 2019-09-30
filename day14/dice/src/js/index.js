const roll = () => Math.floor(Math.random() * 6) + 1;

const rollAll = () => {
  const dice1 = document.querySelector('#dice1');
  const dice2 = document.querySelector('#dice2');
  const dice3 = document.querySelector('#dice3');
  const dice4 = document.querySelector('#dice4');
  const dice5 = document.querySelector('#dice5');
  const dice6 = document.querySelector('#dice6');
  dice1.src = `/img/side${roll()}.png`;
  dice2.src = `/img/side${roll()}.png`;
  dice3.src = `/img/side${roll()}.png`;
  dice4.src = `/img/side${roll()}.png`;
  dice5.src = `/img/side${roll()}.png`;
  dice6.src = `/img/side${roll()}.png`;
};

const rollOne = (event) => {
  const clicked = event.target;
  clicked.src = `/img/side${roll()}.png`;
};

document.addEventListener('DOMContentLoaded', () => {
  const dice1 = document.querySelector('#dice1');
  dice1.addEventListener('click', rollOne);
  const dice2 = document.querySelector('#dice2');
  dice2.addEventListener('click', rollOne);
  const dice3 = document.querySelector('#dice3');
  dice3.addEventListener('click', rollOne);
  const dice4 = document.querySelector('#dice4');
  dice4.addEventListener('click', rollOne);
  const dice5 = document.querySelector('#dice5');
  dice5.addEventListener('click', rollOne);
  const dice6 = document.querySelector('#dice6');
  dice6.addEventListener('click', rollOne);
  const btnRoll = document.querySelector('#btn-roll');
  btnRoll.addEventListener('click', rollAll);
});
