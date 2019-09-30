/* eslint-disable */
//functions

//old way
function roll2() {
    return Math.floor(Math.random() * 6 + 1);
}

//new way - arrow function
() => {
    return Math.floor(Math.random() * 6 + 1);
}

//function is a value

const roll = () => {
    return Math.floor(Math.random() * 6 + 1);
}

const triangleArea = (w, h) => {
    return w * h / 2;
}

//shorcut for simple functions with returning value:
const triangleArea2 = (w, h) => w * h / 2;

//with on parameter it can be also like this:

const multiplyFiveTimes = x => x * 5;