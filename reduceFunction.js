const cart = [
    { name: "Laptop", price: 1200 },
    { name: "Headphones", price: 200 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 100 }
];

const discountThreshold = 1000; // Apply discount if total exceeds this amount
const discountRate = 0.1; // 10% discount

const totalPrice = cart.reduce((total, item) => total + item.price, 0);

// Apply discount if eligible
const finalPrice = totalPrice > discountThreshold ? totalPrice * (1 - discountRate) : totalPrice;

console.log("Total Price before discount:", totalPrice);
console.log("Final Price after discount:", finalPrice);
