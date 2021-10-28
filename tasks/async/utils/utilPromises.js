function firstPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promises');
    }, 50);
  });
}

function secondPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('chained');
    }, 40);
  });
}

function getDogs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("dogs");
    }, 50);
  });
}

function getCats() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("cats");
    }, 100);
  });
}

function getBirds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("birds");
    }, 500);
  });
}

module.exports = {
  getDogs,
  getCats,
  getBirds,
  firstPromise,
  secondPromise
};