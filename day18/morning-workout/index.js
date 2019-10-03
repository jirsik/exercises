let value = 50;

const update = () => {
  const barValue = document.querySelector('#knob');
  const counter =  document.querySelector('#counter');
  counter.textContent = value/10;
  barValue.style.width = `${value}%`;
  if (value <= 20) {
    barValue.classList.add('red');
    barValue.classList.remove('orange');
    barValue.classList.remove('green');
  } else  if (value > 20 && value < 80) {
    barValue.classList.add('orange');
    barValue.classList.remove('red');
    barValue.classList.remove('green');
  } else {
    barValue.classList.add('green');
    barValue.classList.remove('orange');
    barValue.classList.remove('red');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  update();
  document.querySelector('#minus').addEventListener('click', () => {
    if(value > 0) {
      value -= 5;
      update();
    }
  });
  document.querySelector('#plus').addEventListener('click', () => {
    if(value < 100) {
      value += 5;
      update();
    }
  });
});