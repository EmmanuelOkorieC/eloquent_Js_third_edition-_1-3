function countBs(string) {
    let num = 0
    for (let i = 0; i < string.length; i++) {
      if(string[i] == 'B') {
        num+=1
      }
    }
    return num
  }
  
  console.log(countBs("aBBBBcdss"))
  
  function countChar(string, character) {
    let num = 0
    for (let i = 0; i < string.length; i++) {
      if(string[i] == character) {
        num+=1
      }
    }
    return num
  }
  
  console.log(countChar("aBBBBcdss", "s"))