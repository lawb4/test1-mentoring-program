const { describe, it } = require('mocha');
const { expect } = require('chai');
const { myPromise, promise1, promise2 } = require('./async-api');

describe('Promises', () => {

	it('should resolve the promise', async () => {

		/**
		 * 1. Resolve the promise (do not forget to return it)
		 * 2. Handle the result as 'res' variable
		 */
		myPromise(true);

		/**
		 * 3. Place it inside the .then() block
		 */
		 expect(res).to.equal('I am resolved');
		 
	});

	it('should reject the promise', async () => {

		/**
		 * 1. Handle the promise's rejection (do not forget to return in)
		 * 2. Catch the result as 'res' variable
		 */
		myPromise();

		/**
		 * 3. Place it inside the .catch() block
		 */
		expect(res).to.equal('I am rejected');
		 
	});

	it('should resolve the set of promises', async () => {

		/**
		 * 1. Resolve these 2 functions using the Promise.all() (return it)
		 * 2. Save the result as 'res' variable
		 */
		promise1();
		promise2();


		/**
		 * 3. Place 2 following expect()'s inside the .then() block
		 */
		 expect(res).to.include('promise1');
		 expect(res).to.include('promise2');
	});


});

describe('Async/await', () => {

	it('should resolve the promise using async/await', async () => {
		/**
		 * Save the result as the variable 'res';
		 */
		//Place you code here:
		myPromise(true);


		// end of your code
		expect(res).to.equal('I am resolved');
	});

	it('should reject the promise using async/await', async () => {
		/**
		 * 1. Catch the error using the variable 'e'
		 * hint: use try..catch block
		 */
		//Place you code here:
		myPromise();


		// end of your code
		/**
		 * 2. Place it inside the catch {} block
		 */
		expect(e).to.equal('I am rejected');
	});

	it('should resolve the set of promises using async/await', async () => {

		/**
		 * 1. Handle these 2 functions using the Promise.all()
		 * 2. Save the result as 'res' variable
		 */
		//Place you code here:
		promise1();
		promise2();


		// end of your code
		 expect(res).to.include('promise1');
		 expect(res).to.include('promise2');
	});
});