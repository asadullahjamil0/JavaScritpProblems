function processUserInput(callback) {
    let name = "John";
    callback(name);
}

processUserInput((user) => {
    console.log("User processed: " + user);
});
