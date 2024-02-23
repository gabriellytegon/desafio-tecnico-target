const fs = require("fs");

const rawData = fs.readFileSync("invoicing.json");
const monthlyInvoicing = JSON.parse(rawData);

function calculateLowerInvoicing(Invoicing) {
  return Math.min(...Invoicing.map((item) => item.valor));
}

function calculateHigherInvoicing(Invoicing) {
  return Math.max(...Invoicing.map((item) => item.valor));
}

function calculateAverageInvoicing(Invoicing) {
  const daysWithInvoicing = Invoicing.filter((item) => item.valor > 0);
  const sum = daysWithInvoicing.reduce((total, item) => total + item.valor, 0);
  return sum / daysWithInvoicing.length;
}

function calculateDaysAboveAverage(Invoicing) {
  const media = calculateAverageInvoicing(Invoicing);
  return Invoicing.reduce(
    (count, item) => (item.valor > media ? count + 1 : count),
    0
  );
}

// Calculando os valores solicitados
const lowerInvoicing = calculateLowerInvoicing(monthlyInvoicing);
const HigherInvoicing = calculateHigherInvoicing(monthlyInvoicing);
const daysAboveAverage = calculateDaysAboveAverage(monthlyInvoicing);

console.log("Menor valor de faturamento:", lowerInvoicing);
console.log("Maior valor de faturamento:", HigherInvoicing);
console.log(
  "Número de dias com faturamento acima da média mensal:",
  daysAboveAverage
);
