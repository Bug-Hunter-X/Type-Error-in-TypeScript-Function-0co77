function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result = add(5, 3); // result is 8
result = subtract(10, 5); // result is 5

let value1 = 5;
let value2 = "hello";

if(isNumber(value1) && isNumber(value2)){
    result = add(value1, value2);
}
//if we don't use the type guard it will throw an error.
else{
    console.log("Incorrect parameter type");
}
//result = add(5, "hello"); //this line will cause an error if we don't use type guard