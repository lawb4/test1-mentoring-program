const myPromise = state => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (state) {
				resolve('I am resolved');
			} else {
				reject('I am rejected');
			}
		}, 500);
	});
};

const promise1 = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('promise1');
		}, 500);
	});
};

const promise2 = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('promise2');
		}, 200);
	});
};

module.exports = {
  myPromise,
  promise1,
  promise2
}