function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result is 8
result = subtract(10, 5); // result is 5

//Type Error: Argument of type 'string' is not assignable to parameter of type 'number'.
result = add(5, "hello"); //this line will cause an error