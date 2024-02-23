function isFibonacci(number) {
  let previous = 0;
  let current = 1;
  let auxiliary = 0;

  if (number == 0) {
    return true;
  }

  while (current <= number) {
    if (number == previous || number == current) {
      return true;
    } else {
      auxiliary = current;
      current += previous;
      previous = auxiliary;
    }
  }

  return false;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o número: ", (answer) => {
  if (isFibonacci(answer)) {
    console.log(`O número informado pertence a sequência de Fibonacci!`);
  } else {
    console.log(`O número informado não pertence a sequência de Fibonacci!`);
  }

  rl.close();
});
