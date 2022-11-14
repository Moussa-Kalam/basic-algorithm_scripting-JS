function reverseString(str) {
    /* Split the given string into an array */
    /* Reverse the array */
    /* Join the array into a single string */
    str = str.split("").reverse().join("");
    return str;
}

console.log(reverseString("Programming is fun"));