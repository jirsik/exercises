let op = null;
let memoryValue = null;
let lastValue = null;
let newCounting = false;

const clearEvent = () => {
  const result = document.querySelector('.calc__result');
  const input = document.querySelector('.calc__input');
  const opShow = document.querySelector('.calc__operator');
  input.classList.remove('calc__input--modifier');
  input.value = '0';
  result.textContent = '0';
  op = null;
  opShow.textContent = '';
  newCounting = false;
};

const equalsEvent = () => {
  const resultText = document.querySelector('.calc__result');
  const input = document.querySelector('.calc__input');
  if (input.classList.contains('calc__input--modifier') && lastValue !== null) {
    input.value = lastValue;
  }
  lastValue = parseFloat(input.value, 10);
  switch (op) {
    case '+': resultText.textContent = parseFloat(resultText.textContent, 10) + parseFloat(input.value, 10);
      input.classList.add('calc__input--modifier');
      break;
    case '−': resultText.textContent = parseFloat(resultText.textContent, 10) - parseFloat(input.value, 10);
      input.classList.add('calc__input--modifier');
      break;
    case '×': resultText.textContent = parseFloat(resultText.textContent, 10) * parseFloat(input.value, 10);
      input.classList.add('calc__input--modifier');
      break;
    case '÷': resultText.textContent = parseFloat(resultText.textContent, 10) / parseFloat(input.value, 10);
      input.classList.add('calc__input--modifier');
      break;
    default: resultText.textContent = parseFloat(input.value, 10);
      input.value = '';
  }
  newCounting = true;
};

const updateOp = (sender) => {
  const opShow = document.querySelector('.calc__operator');
  opShow.textContent = sender.textContent;
};

const opClick = (event) => {
  const input = document.querySelector('.calc__input');
  if (!input.classList.contains('calc__input--modifier')) { equalsEvent(); }
  op = event.target.textContent;
  updateOp(event.target);
  newCounting = false;
};

const checkForNewCounting = () => {
  const input = document.querySelector('.calc__input');
  if (newCounting) {
    clearEvent();
  } else if (input.classList.contains('calc__input--modifier')) {
    input.classList.remove('calc__input--modifier');
    input.value = '';
    newCounting = false;
  }
};

const numberEvent = (event) => {
  const sender = event.target;
  const input = document.querySelector('.calc__input');
  checkForNewCounting();
  if (input.value === '0') {
    input.value = sender.textContent;
  } else {
    input.value += sender.textContent;
  }
};

const pointEvent = () => {
  const input = document.querySelector('.calc__input');
  checkForNewCounting();
  if (input.value === '0' || input.value === '') {
    input.value = '0.';
  } else if (input.value.indexOf('.') === -1) {
    input.value += '.';
  }
};

const memoryClearEvent = () => {
  memoryValue = null;
  document.querySelector('#btn-m').classList.remove('calc__btn--memory');
};

const memoryEvent = () => {
  const input = document.querySelector('.calc__input');
  if (memoryValue !== null) {
    checkForNewCounting();
    input.value = memoryValue;
  }
};

const memoryMinusEvent = () => {
  const result = document.querySelector('.calc__result');
  document.querySelector('#btn-m').classList.add('calc__btn--memory');
  memoryValue -= parseFloat(result.textContent);
  if (memoryValue === 0) {
    memoryClearEvent();
  }
};

const memoryPlusEvent = () => {
  const result = document.querySelector('.calc__result');
  document.querySelector('#btn-m').classList.add('calc__btn--memory');
  memoryValue += parseFloat(result.textContent);
  if (memoryValue === 0) {
    memoryClearEvent();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const clear = document.querySelector('#btn-clear');
  clear.addEventListener('click', clearEvent);
  const plus = document.querySelector('#btn-plus');
  plus.addEventListener('click', opClick);
  const minus = document.querySelector('#btn-minus');
  minus.addEventListener('click', opClick);
  const times = document.querySelector('#btn-times');
  times.addEventListener('click', opClick);
  const div = document.querySelector('#btn-div');
  div.addEventListener('click', opClick);
  const equals = document.querySelector('#btn-equals');
  equals.addEventListener('click', equalsEvent);

  const zero = document.querySelector('#btn-0');
  zero.addEventListener('click', numberEvent);
  const one = document.querySelector('#btn-1');
  one.addEventListener('click', numberEvent);
  const two = document.querySelector('#btn-2');
  two.addEventListener('click', numberEvent);
  const three = document.querySelector('#btn-3');
  three.addEventListener('click', numberEvent);
  const four = document.querySelector('#btn-4');
  four.addEventListener('click', numberEvent);
  const five = document.querySelector('#btn-5');
  five.addEventListener('click', numberEvent);
  const six = document.querySelector('#btn-6');
  six.addEventListener('click', numberEvent);
  const seven = document.querySelector('#btn-7');
  seven.addEventListener('click', numberEvent);
  const eight = document.querySelector('#btn-8');
  eight.addEventListener('click', numberEvent);
  const nine = document.querySelector('#btn-9');
  nine.addEventListener('click', numberEvent);

  const point = document.querySelector('#btn-point');
  point.addEventListener('click', pointEvent);

  const memoryClear = document.querySelector('#btn-mc');
  memoryClear.addEventListener('click', memoryClearEvent);
  const memory = document.querySelector('#btn-m');
  memory.addEventListener('click', memoryEvent);
  const memoryMinus = document.querySelector('#btn-m-minus');
  memoryMinus.addEventListener('click', memoryMinusEvent);
  const memoryPlus = document.querySelector('#btn-m-plus');
  memoryPlus.addEventListener('click', memoryPlusEvent);
});
