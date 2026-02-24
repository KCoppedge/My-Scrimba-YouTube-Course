const characters = [
  // Lowercase letters (a-z)
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',

  // Uppercase letters (A-Z)
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',

  // Numbers (0-9)
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',

  // Symbols
  '!', '@', '#', '$', '%', '^', '&'
];


passwordMaxLen = 10

function genPass() {
  let passwordOne = ""
  let passwordtwo = ""
  for (i = 0; i < passwordMaxLen; i++) {
    let randomIndexOne = Math.floor(Math.random() * characters.length)
    let randomIndexTwo = Math.floor(Math.random() * characters.length)
    let output1 = document.getElementById("output1El")
    let output2 = document.getElementById("output2El")
    passwordOne += characters[randomIndexOne];
    passwordtwo += characters[randomIndexTwo];
    output1.textContent = passwordOne
    output2.textContent = passwordtwo

  }
}


