// const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

// console.log(getFileExtension("index.html"));
// console.log(getFileExtension("webpack.config.js"));

const getFileName = (str) => str.slice(0, str.lastIndexOf('.')) || str;

console.log(getFileName("index.html")); // Output: "index"
console.log(getFileName("webpack.config.js")); // Output: "webpack.config"
console.log(getFileName("README")); // Output: "README"
