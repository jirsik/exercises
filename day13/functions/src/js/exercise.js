/* eslint-disable */
const square = a => a * a;
const hypotenuse = (a, b) => Math.sqrt(square(a) + square(b));

const salary = (pay, hours, days) => pay * hours * days;
const taxedSalary = (salary, tax) => salary * (1-tax);