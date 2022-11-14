function truncateString(str, num) {
    truncStr = "";
    if (str.length <= num) {
        return str;
    } else {
        //console.log(str.slice(0, num).length);
        return str.slice(0, num) + "..."

    }
   
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));