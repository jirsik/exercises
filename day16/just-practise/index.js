const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -15, -16, -18, -15, -2, 17];
let i = 0;
let result = 1;
let direction = 0;
let best = 0;
let reverse = [];
for (number of numbers) {
    reverse.unshift(number);
    if (number > i && direction >= 0) {
        direction = 1;
        result++;
    } else if (number < i && direction <= 0) {
        direction = -1;
        result++;
    } else {
        if (result > best) {
            best = result;
            // console.log(best);
        }
        result = 1;
        direction = 0;
    }
    i = number;
}
console.log(best);
console.log(reverse);

const len = (array) => array.length;
const last = (array) => {
    if (array.length === 0) {return null;}
    return array[array.length-1];
};

const elementAt = (array, k) => {
    if (k < array.length && k > 0) {
        return array[k-1];
    } else {
        return null;
    }
};

const isPalindrome = (array) => {
    let result = true;
    for (let i = 0; i < array.length -1 / 2; i++) {
        if (array[i] !==  array[array.length-1-i]) {
            result = false;
            return result;
        }
    }
    return result;
}

const compress = (array) => {
    let result = [array[0]];
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[i - 1]) {result.push(array[i]);}
    }
    return result;
};

const pack = (array) => {
    let result = [];
    let subArray = [array[0]];
    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1]) {
            subArray.push(array[i]);
        } else {
            result.push(subArray);
            subArray = [array[i]];
        }
    }
    result.push(subArray);
    return result;
};

const encode = (array) => {
    let result = [];
    let subArray = [array[0]];
    let duplicates = 1;
    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1]) {
            duplicates++;
        } else {
            subArray.unshift(duplicates);
            result.push(subArray);
            subArray = [array[i]];
            duplicates = 1;
        }
    }
    subArray.unshift(duplicates);
    result.push(subArray);
    return result;
};

