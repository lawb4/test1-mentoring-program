const {
	describe,
	it
} = require('mocha');
const {
	expect
} = require('chai');
const {
	promiseResolve,
	promiseReject,
	fullPromise,
	promisesChaining,
	getAnimals
} = require('../promises');
const {
	asyncPromiseResolve,
	asyncPromiseReject,
	asyncPromiseAll
} = require("../asyncAwait");


describe('Promises', () => {

	it('TASK-1: should create a promise that will be resolved', async () => {
		return promiseResolve().then(result => expect(result).to.equal("Resolved!"));
	});

	it('TASK-2: should create a promise that will be rejected', async () => {
		return promiseReject().catch(result => expect(result).to.equal("Rejected!"));
	});

	it('TASK-3: should resolve or reject the promise considering the input parameter', async () => {
		const param = !!Math.round(Math.random() * 1);
		return fullPromise(param)
			.then(result => expect(result).to.equal("Resolved!"))
			.catch(result => expect(result).to.equal("Rejected!"));
	});

	it('TASK-4: should chain promises', async () => {
		const result = await promisesChaining();
		expect(result).to.equal("Promises chained");
	});

	it('TASK-5: should return array of animals practicing Promise.all() method', async () => {
		return getAnimals().then(results => {
			expect(results).to.have.members(["dogs", "cats", "birds"]);
		});
	});

});

describe('Async/await syntax', () => {

	it('TASK-1: should resolve the promise using async/await syntax', async () => {
		const result = await asyncPromiseResolve();
		expect(result).to.equal("Resolved! with async await");
	});

	it('TASK-2: should reject the promise using async/await syntax', async () => {
		const result = await asyncPromiseReject();
		expect(result).to.equal("Rejected! with async await");
	});

	it('TASK-3: should return array of animals using async/await syntax', async () => {
		const result = await asyncPromiseAll();
		expect(result).to.have.members(["dogs", "cats", "birds"]);
	});

});