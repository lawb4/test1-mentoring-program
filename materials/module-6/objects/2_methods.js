const options = {
  width: 1024,
  height: 1024,
  name: "test"
};

/**
 * hasOwnProperty()
 */
console.log(options.hasOwnProperty('width'));
console.log(options.hasOwnProperty('test'));

/**
 * Object.keys()
 */
console.log(`KEYS: ${Object.keys(options)}`);

// /**
//  * Object.values()
//  */
console.log(`VALUES: ${Object.values(options)}`);


/**
 * Copy the object
 */

const obj1 = {
  a: 1,
  b: 2
};

// /**
//  * Object.assign()
//  */
const target = {
  a: 1,
  b: 2
};
const source = {
  b: 4,
  c: 5
};

// const returnedTarget = Object.assign({}, source);


// console.log(target); // { a: 1, b: 4, c: 5 }
// console.log(returnedTarget); // { a: 1, b: 4, c: 5 }