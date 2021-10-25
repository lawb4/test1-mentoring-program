/** TODO
 * implement factorial algorithm using for, while, do..while operators
 * assign result to corresponding variable
 * for - forFactorial
 * while - whileFactorial
 * do..while - doFactorial
 */
let forFactorial, whileFactorial, doFactorial;
const n = 10; //10! = 3628800

forFactorial = whileFactorial = doFactorial = 1;
let i = n;

for (i = n; i > 0; i--) {
  forFactorial *= i;
}

i = n;
while (i > 0) {
  whileFactorial *= i;
  i--;
}

i = n;
do {
  doFactorial *= i;
  i--;
} while (i > 0);

/** TODO
 * return concatenated string from an array of substring
 * assign result to variable str
 */
let str = '';
const substr = ["I", " love", " JS"];

for (let i = 0; i < substr.length; i++) {
  str += substr[i];
}

// Using 'for..of'
// for (let word of substr) {
//   str += word;
// }

/** TODO
 * calculate a total of income of certain person
 * assign result to variable totalIncome
 */
let totalIncome = 0;
const personIncomes = {
  salary: 1985,
  rent: -600,
  interestOnDeposit: 250,
  otherExpences: -300
};

for (const el in personIncomes) {
  totalIncome += personIncomes[el];
}


module.exports = {
  forFactorial,
  whileFactorial,
  doFactorial,
  str,
  totalIncome
};