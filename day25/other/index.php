<?php

// Functions #4
// Declare a variable $celsius and initialize it with the value 100

// Write a function celsiusToFahrenheit that would accept one argument:

// temperature in celsius
// Inside the functiion convert the temperature from Celsius to Fahrenheit and return the result.

// The equation is F = (9/5) * C + 32

// Call the function using the variable $celsius as argument.

$celsius = 100;

function celsius_to_fahrenheit($temp)
{
    return (9/5) * $temp + 32;
}

echo celsius_to_fahrenheit($celsius);