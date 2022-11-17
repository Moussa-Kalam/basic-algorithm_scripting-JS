function titleCase(str) {
    /** Turn the string into lowercase first using toLowerCase
     * Turn the string into an array using split()
     * Iterate over the array and capitalize the first character using map() and toUpperCase()
     * Join the array of words into a string using join()
     */
 let titleCaseStr = str.toLowerCase().split(" ").map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize first letter and add the rest for each word
 }).join(" ");
 return titleCaseStr;
}

console.log(titleCase("I love prOgrAmmIng with JavaScript"));