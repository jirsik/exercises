// let salary = prompt('your salary per hour:');
// let hours = prompt('how many hours per day do you work:');
// let days = prompt('how many days per month do you work:');
// document.write('Your wage is: ' + (parseFloat(salary) * parseFloat(hours) * parseFloat(days)) + ' per month.');
// document.write('That is: ' + (parseFloat(salary) * parseFloat(hours) * parseFloat(days) * 0.5) + ' netto.');

// const exchangeRate = 25.695;
// let euros = prompt('Euros:');
// let czk = euros * exchangeRate;
// document.write(euros + ' euros is equal ' + czk + ' CZK');

// let hours = [8, 7, 5, 9, 8, 3, 2];
// console.log('On sunday, you worked for ' + hours[6] + ' hours.');

// let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
// days.push('saturday', 'sunday');
// console.log(days);
// console.log(days.length);

//chess
// let chess = [
//             [5, 0, 0, 0, 0, 0 ,0 ,0],
//             [0, 0, 0, 0, 0, 1 ,0 ,0],
//             [0, 0, 0, 0, 0, 1 ,0 ,1],
//             [0, 0, 0, 0, 0, 1 ,1 ,3],
//             [0, 0, 0, 0, 0, 0 ,1 ,6],
//             [0, 0, 0, 0, 3, 0 ,2 ,1],
//             [0, 0, 0, 0, 0, 0 ,0 ,1],
//             [0, 0, 0, 0, 0, 0 ,6 ,0]
//             ];
// chess[3][6] = chess[4][7];
// chess[4][7] = 0;
// console.log(chess);

//cards
// const ranks = ['ace', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
// const suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];
// let randomRank = Math.floor(Math.random() * 14);
// let randomSuit = Math.floor(Math.random() * 4);

// let card = ranks[randomRank] + ' of ' + suits[randomSuit];
// console.log('Today your lucky card is: ' + card);

//min and max dice
const min = parseFloat(prompt('min:'));
const max = parseFloat(prompt('max:'));
let randomNumber = (Math.floor(Math.random() * (max - min + 1)) + min);
document.write(randomNumber);


// function array_diff(a, b) {
//     let result= [];
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] !== b) {
//         result.push(a[i]);
//       }
//     }
//     return result;
//   }
