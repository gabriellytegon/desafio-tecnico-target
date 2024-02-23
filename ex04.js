const states = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  outros: 19849.53,
};

const percentageStates = {};

let resultingValue = 0;

for (const state in states) {
  resultingValue += states[state];
}

for (const state in states) {
  const percentage = (states[state] * 100) / resultingValue;
  percentageStates[state] = percentage.toFixed(2);
}

for (const state in percentageStates) {
  console.log(`${state}: ${percentageStates[state]}%`);
}
