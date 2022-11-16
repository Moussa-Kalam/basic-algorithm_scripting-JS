function booWho(bool) {
    return typeof(bool) == "boolean";
//     if(bool === true || bool === false) {
//       return true
//     }
//     return false;
  }
  
  console.log(booWho(false));
  console.log(booWho(null));