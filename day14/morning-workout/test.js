const foo = (x, y) => x(x(y));

console.log(foo(x => x / 2, 8));


  
