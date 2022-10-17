let size = 8
let text = ''

for (let i = 0; i< size; i++) {
  for (let j = 0; j < size; j++) {
    if ((j + i) % 2 == 0) {
      text += " " 
    } else {
      text += '#' 
    }
  }
  text += "\n"
}


console.log(text)