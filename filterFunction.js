const products = [
    { name: "Laptop", price: 800, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Shirt", price: 30, category: "Clothing" },
    { name: "Shoes", price: 60, category: "Clothing" },
    { name: "Headphones", price: 100, category: "Electronics" }
];
const getElectronics = products.filter(product => product.category === "Electronics");
console.log("Electronics: ", getElectronics);

const getClothing = products.filter(product => product.category === "Clothing");
console.log("Clothing: ", getClothing);

const expensiveProducts = products.filter(product => product.price > 50);
console.log("Expensive Products: ", expensiveProducts);
