//assignment
let x = 42;
// console.log('x =', x);


//arithmetic
let add = x + 4;
// console.log('sum =', add);
let sub = x - 4;
// console.log('sub =', sub);
let mul = x * 4;
// console.log('mul =', mul);
let div = x / 2;
// console.log('div =', div);
let mod = x % 5;
// console.log('mod =', mod);
let pow = x ** 1;
// console.log('pow =', pow);

let i = 1;
i++;
++i;
// console.log('k =', k);

let j = 1;
j--;
--j;
console.log('j =', j);

//additional assignment
const INCREMENT_VALUE = 6;
let value1 = 100;
let value2 = 100;
let value3 = 100;
let value4 = 100;
let value5 = 100;

value1 += INCREMENT_VALUE;
//console.log('value1 =', value1);
value2 -= INCREMENT_VALUE;
//console.log('value2 =', value2);
value3 *= INCREMENT_VALUE;
//console.log('value3 =', value3);
value4 /= INCREMENT_VALUE;
//console.log('value4 =', value4);
value5 %= INCREMENT_VALUE;
//console.log('value5 =', value5);


//string
let java = 'java';
let script = 'script';

let js1 = java + script;
// console.log('js1 =', js1);
java += '10';
//console.log('java =', java);


//comparison
let eq1 = 5 == 5;
let eq2 = 5 == '5';
// console.log('eq1 =', eq1);
// console.log('eq2 =', eq2);

let seq1 = 5 === 5;
let seq2 = 5 === '5';
// console.log('strict equality =', seq1);
// console.log('strict equality =', seq2);

let uneq = 5 != '5';
let suneq = 5 !== '5';
// console.log('unequality =', uneq);
// console.log('strict unequality =', suneq);

let gt = 2 > 2;
let gte = 2 >= 2;
let lt = 3 < 3;
let lte = 3 <= 3;
// console.log('gt =', gt);
// console.log('gte =', gte);
// console.log('lt =', lt);
// console.log('lte =', lte);

// logical
let statement1 = 3 > 2;
let statement2 = 0 > 1;

let antitruth = !statement1;
// console.log('antitruth =', antitruth);

let or = statement1 || statement2
// console.log('or =', or);

let and = statement1 && statement2
// console.log('and =', and);

// typeof
let str = typeof "John";
let nmb = typeof 3.14;
let bool = typeof false;
// console.log('str =', str);
// console.log('nmb =', nmb);
// console.log('bool =', bool);