let a = 1; 
let b = 10; 
let sum = 0; 
for (let i = a; i <= b; i++) {
  if (i % 2 === 0) {
    sum += i; 
  }
}
console.log(`Suma numerelor pare din intervalul [${a}, ${b}] este : ${sum}`);
