// const makeNewString = (str) =>
//     str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

// console.log(makeNewString('als'))
// console.log(makeNewString('als9fnasd'))
// console.log(makeNewString('als346s'))


const extractFirstHalf = (str) => str.slice(0, str.length / 2);

console.log(extractFirstHalf('AsadJJJJI'))