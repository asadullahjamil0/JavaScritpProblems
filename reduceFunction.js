// const cart = [
//     { name: "Laptop", price: 1200 },
//     { name: "Headphones", price: 200 },
//     { name: "Mouse", price: 50 },
//     { name: "Keyboard", price: 100 }
// ];

// const discountThreshold = 1000; // Apply discount if total exceeds this amount
// const discountRate = 0.1; // 10% discount

// const totalPrice = cart.reduce((total, item) => total + item.price, 0);

// // Apply discount if eligible
// const finalPrice = totalPrice > discountThreshold ? totalPrice * (1 - discountRate) : totalPrice;

// console.log("Total Price before discount:", totalPrice);
// console.log("Final Price after discount:", finalPrice);

// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 25 },
//     { name: "David", age: 30 },
//     { name: "Eve", age: 35 }
//   ];
  
//   const groupedByAge = people.reduce((acc, person) => {
//     if (!acc[person.age]) {
//       acc[person.age] = [];
//     }
//     acc[person.age].push(person.name);
//     return acc;
//   }, {});
  
//   console.log(groupedByAge);
  


//Another example
const people = [
  { name: 'Alice', age: 25, department: 'HR' },
  { name: 'Bob', age: 30, department: 'Engineering' },
  { name: 'Charlie', age: 25, department: 'Engineering' },
  { name: 'David', age: 30, department: 'HR' },
  { name: 'Eve', age: 25, department: 'Marketing' },
];

// Group people by their age
const groupedByAge = people.reduce((acc, person) => {
  const age = person.age;
  if (!acc[age]) {
    acc[age] = []; // Initialize an empty array for this age group
  }
  acc[age].push(person); // Add the person to the appropriate age group
  return acc;
}, {});

console.log(groupedByAge);