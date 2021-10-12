const {jsonParser} = require('../parser/parser');
const {sendRequest} = require('../fetch/fetch');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('Fetch method', () => {
	let responseJson;

	before(async () => await sendRequest());
	beforeEach(() => responseJson = require('../fetch/response.json'));

	it('should receive items', async () => {
		responseJson.forEach(item => expect(typeof item).to.equal('object'));
	});

	it('should contain ids below 20', async () => {
		const ids = responseJson.map(item => item.id);
		ids.forEach(id => expect(id).to.be.below(20));
	});
	
});

describe('JSON Parser', () => {
	let parserJson;

	before(()=> jsonParser());
	beforeEach(() => parserJson = require('../parser/parsed.json'));

	it('.html should be replaced for every item', () => {
		expect(parserJson.every(item => item.docId.includes('html'))).to.equal(false);
	});
	
	it('every item should contain http://doc.epam.com/ string', () => {
		expect(parserJson.every(item => item.docId.includes('http://doc.epam.com/'))).to.equal(true);
	});

});