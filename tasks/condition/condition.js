/** TODO
 * The system receives two params x and y.
 * Implement the logic when z equal to sum of x and y in case if y less than 10
 * or multiplication in case of greater or equal than 10
 * result assign to z1 and z2 variables accordingly
 * Task 1 - if else - z1
 * Task 2 - ternary operator - z2
 */
let z1;
let z2;
const x = 3;
const y = 7;

//TODO put your code here
if (y < 10) {
    z1 = x + y;
} else {
    z1 = x * y;
}

z2 = (y < 10) ? (x + y) : (x * y);

/** TODO
 * The system receives 3 params - alpha, beta, operator.
 * Operator can pass 4 possible values - "add", "subtract", "multiply", "divide".
 * Implement the logic when the system does appropriate operation based on passed operator param.
 * Assign result to task2 variable
 */
let task2;
const alpha = 3;
const beta = 7;
const operator = "add";

//TODO put your code here
switch (operator) {
    case 'add':
        task2 = alpha + beta;
        break;
    case 'subtract':
        task2 = alpha - beta;
        break;
    case 'multiply':
        task2 = alpha * beta;
        break;
    case 'divide':
        task2 = alpha / beta;
        break;
}


/**
 * TODO
 * Write the logic that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0
 * - 351  - 1350: 15
 * - 1351 - 2700: 30
 * - 2701 - 6500: 45
 * assign result to discount variable
 */
const redemption = 420;
let discount;

//TODO put your code here
if (redemption <= 350) {
    discount = 0;
} else if (redemption <= 1350) {
    discount = 15;
} else if (redemption <= 2700) {
    discount = 30;
} else if (redemption <= 6500) {
    discount = 45;
}

module.exports = {
    z1,
    z2,
    x,
    y,
    alpha,
    beta,
    operator,
    task2,
    redemption,
    discount
};