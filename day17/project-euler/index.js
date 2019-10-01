let result = 0;
for (i=1; i<=1000;i++) {
    let part = '' + (i ** i);
    part = part.slice(part.length-10);
    result += parseInt(part, 10);
}
console.log(result);