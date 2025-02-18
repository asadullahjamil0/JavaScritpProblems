const makeNewString = (str) =>
    str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(makeNewString('als'))
console.log(makeNewString('als9fnasd'))
console.log(makeNewString('als346s'))



