/* The Promise object represents the eventual completion (or failure)
* of an asynchronous operation and its resulting value.
*/

/* A Promise is in one of these states:
    * pending: initial state, neither fulfilled nor rejected.
* fulfilled: meaning that the operation was completed successfully.
* rejected: meaning that the operation failed.
*/

const myPromise = () => {
    return new Promise((resolve, reject) => {
        const param = !!Math.round(Math.random() * 1);
        setTimeout(() => {
            if (param) {
                resolve('Promise resolved!!');
            } else {
                reject('Promise rejected!!');
            }
        }, 2000);
    });
};

myPromise()
    .then(res => console.log(res))
    .catch(e => console.log(e))
    .finally(() => console.log('Finally')); // will execute no matter the result is

/* Promises chaining
*/

function promiseOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('First');
        }, 50);
    });
}

function promiseTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Second');
        }, 40);
    });
}

promiseOne()
    .then(res => {
        console.log(res);
        return promiseTwo();
    })
    .then(res => console.log(res));


/* The Promise.all() method takes an iterable of promises as an input,
* and returns a single Promise that resolves to an array of the results of the input promises.
*/
Promise.all([promiseOne(), promiseTwo()])
    .then(res => console.log(res));

/**
 * The Promise.race() method returns a promise that fulfills or rejects
 * as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
 */
Promise.race([promiseOne(), promiseTwo()])
    .then(res => console.log(res));