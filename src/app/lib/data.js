function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// You can replace this with any year

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const data = [
  {
    year: 2023,
    monthData: [
      { January: Array(days[0]).fill("") },
      { February: Array(days[1]).fill("") },
      { March: Array(days[2]).fill("") },
      { April: Array(days[3]).fill("") },
      { May: Array(days[4]).fill("") },
      { June: Array(days[5]).fill("") },
      { July: Array(days[6]).fill("") },
      { August: Array(days[7]).fill("") },
      { September: Array(days[8]).fill("") },
      { October: Array(days[9]).fill("") },
      { November: Array(days[10]).fill("") },
      { December: Array(days[11]).fill("") },
    ],
  },
];
function appendnewObject(y) {
  const modelObject = {
    year: Number(`${y}`),
    monthData: [
      { January: Array(days[0]).fill("") },
      { February: Array(days[1]).fill("") },
      { March: Array(days[2]).fill("") },
      { April: Array(days[3]).fill("") },
      { May: Array(days[4]).fill("") },
      { June: Array(days[5]).fill("") },
      { July: Array(days[6]).fill("") },
      { August: Array(days[7]).fill("") },
      { September: Array(days[8]).fill("") },
      { October: Array(days[9]).fill("") },
      { November: Array(days[10]).fill("") },
      { December: Array(days[11]).fill("") },
    ],
  };
  data.push(modelObject);
}
// const modelObject = {
//   year: 2023,
//   monthData: [
//     { January: Array(days[0]).fill("") },
//     { February: Array(days[1]).fill("") },
//     { March: Array(days[2]).fill("") },
//     { April: Array(days[3]).fill("") },
//     { May: Array(days[4]).fill("") },
//     { June: Array(days[5]).fill("") },
//     { July: Array(days[6]).fill("") },
//     { August: Array(days[7]).fill("") },
//     { September: Array(days[8]).fill("") },
//     { October: Array(days[9]).fill("") },
//     { November: Array(days[10]).fill("") },
//     { December: Array(days[11]).fill("") },
//   ],
// };
function checkYear(year) {
  let ans = data.find((item) => item.year === year);
  return ans === undefined;
}

const item = data.find((item) => item.year == 2027);
console.log(item);

export { months, days, data, appendnewObject, checkYear, isLeapYear };
