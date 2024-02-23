function invertString(word) {
  let newString = "";
  for (let auxiliary = word.length - 1; auxiliary >= 0; auxiliary--) {
    newString += word[auxiliary];
  }
  return newString;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a palavra: ", (answer) => {
  const invertedString = invertString(answer);
  console.log(`String invertida: ${invertedString}`);
  rl.close();
});
