function countVowels(str) {
    const vowels = "aeiouAEIOU"; // List of vowels (including uppercase)
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    
    return count;
}

console.log(countVowels("Hello World")); // 3
console.log(countVowels("JavaScript"));  // 3
console.log(countVowels("aeiou"));       // 5
console.log(countVowels("bcdfghjklmnpqrstvwxyz")); // 0
