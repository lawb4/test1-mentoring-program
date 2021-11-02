/**
 * A callback function is a function passed into another function as an argument,
 * which is then invoked inside the outer function to complete some kind of routine or action.
 */


function f1(callback) {
    return setTimeout(() => {
        console.log('f1');
        callback();
    }, 2000);
}

function f2() {
    return setTimeout(() => console.log('f2'), 1000);
}

f1(f2);