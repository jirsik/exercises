const transferEvent = () => {
  const original = document.querySelector('#input').value;
  if (Number.isNaN(parseInt(original, 10))) {
    return 'not a valid number';
  }
  if (original.length > 4) {
    return 'too long';
  }
  if (parseInt(original, 10) >= 4000) {
    return 'out of range';
  }
  let roman = '';
  switch (original[original.length - 1]) {
    case '1': roman = 'I';
      break;
    case '2': roman = 'II';
      break;
    case '3': roman = 'III';
      break;
    case '4': roman = 'IV';
      break;
    case '5': roman = 'V';
      break;
    case '6': roman = 'VI';
      break;
    case '7': roman = 'VII';
      break;
    case '8': roman = 'VIII';
      break;
    case '9': roman = 'IX';
      break;
    default:
  }
  if (original.length >= 2) {
    switch (original[original.length - 2]) {
      case '1': roman = `X${roman}`;
        break;
      case '2': roman = `XX${roman}`;
        break;
      case '3': roman = `XXX${roman}`;
        break;
      case '4': roman = `XL${roman}`;
        break;
      case '5': roman = `L${roman}`;
        break;
      case '6': roman = `LX${roman}`;
        break;
      case '7': roman = `LXX${roman}`;
        break;
      case '8': roman = `LXXX${roman}`;
        break;
      case '9': roman = `XC${roman}`;
        break;
      default:
    }
  }
  if (original.length >= 3) {
    switch (original[original.length - 3]) {
      case '1': roman = `C${roman}`;
        break;
      case '2': roman = `CC${roman}`;
        break;
      case '3': roman = `CCC${roman}`;
        break;
      case '4': roman = `CD${roman}`;
        break;
      case '5': roman = `D${roman}`;
        break;
      case '6': roman = `DC${roman}`;
        break;
      case '7': roman = `DCC${roman}`;
        break;
      case '8': roman = `DCCC${roman}`;
        break;
      case '9': roman = `CM${roman}`;
        break;
      default:
    }
  }
  if (original.length === 4) {
    switch (original[original.length - 4]) {
      case '1': roman = `M${roman}`;
        break;
      case '2': roman = `MM${roman}`;
        break;
      case '3': roman = `MMM${roman}`;
        break;
        //   case '4': roman = `MMMM${roman}`;
        //     break;
      default:
    }
  }
  return roman;
};

const print = () => {
  const target = document.querySelector('#result');
  target.textContent = '';
  target.textContent = transferEvent();
};

document.addEventListener('DOMContentLoaded', () => {
  const btnTransfer = document.querySelector('#transfer');
  btnTransfer.addEventListener('click', print);
});
