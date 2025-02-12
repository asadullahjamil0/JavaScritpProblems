// Array of student objects
// const students = [
//     { name: "Alice", marks: 85 },
//     { name: "Bob", marks: 72 },
//     { name: "Charlie", marks: 90 }
// ];

// Use map to create a new array with student grades
// const studentGrades = students.map(student => {
//     return {
//         name: student.name,
//         marks: student.marks,
//         grade: student.marks >= 80 ? "A" : "B"
//     };
// });

// Print the new array
// console.log(studentGrades);




// Another example of Map Function
// const numbers = [2, 3, 4, 5, 6];

// var multiplyNum = numbers.map(function (number) {
//     return number * 2;
// })

// console.log("Original Numbers: " + numbers);
// console.log("Multiplied Numbers: ");
// for (let index = 0; index < multiplyNum.length; index++) {
//     console.log(multiplyNum[index]);
// }

// const prices = [100, 200, 300, 400, 500];

// var discountedPrices = prices.map(function (price) {
//     return price * 0.9; // Applying a 10% discount
// });

// console.log("Original Prices: " + prices);
// console.log("Discounted Prices: ");
// for (let index = 0; index < discountedPrices.length; index++) {
//     console.log(discountedPrices[index]);
// } 




// Another Example of Map Function
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
];

const userDescriptions = users.map(user => {
    return {
        userId: user.id,
        fullName: user.name.toUpperCase(), // converting name to uppercase
        userAge: user.age,
        isAdult: user.age >= 18 // checking if the user is an adult
    };
});

