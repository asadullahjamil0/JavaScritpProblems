// function processUserInput(callback) {
//     let name = "John";
//     callback(name);
// }

// processUserInput((user) => {
//     console.log("User processed: " + user);
// });



// Function that accepts a callback
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
