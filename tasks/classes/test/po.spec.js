const { BasePage, LoginPage } = require('../pageObject');
const { describe,it } = require('mocha');
const { expect } = require('chai');
const login = new LoginPage('www.test.com');

describe('Page Object', () => {
	
	it('LoginPage should inherite BasePage', () => {
		expect(login instanceof LoginPage, 'LoginPage is not inherited from BasePage').to.equal(true);
		expect(login instanceof BasePage, 'LoginPage is not inherited from BasePage').to.equal(true);
	});

	it('url should be defined', () => {
		expect(login.baseUrl).not.to.be.undefined;
	});

	it('login should contain Footer', () => {
		expect(login).to.have.property('footer');
	});

	it('login should contain Header', () => {
		expect(login).to.have.property('header');
	});

	it('login should be able to review the Footer', () => {
		expect(login.footer.review()).to.contain('footer');
	});

	it('login page should be opened', () => {
		expect(login.open()).to.contain('login');
	});

	it('should be able to type an Email', () => {
		expect(login.typeEmail('test@test.com')).to.contain('type');
		expect(login.typeEmail('test@test.com')).to.contain('email');
	});

	it('should be able to type a Password', () => {
		expect(login.typePassword('abc')).to.contain('type');
		expect(login.typePassword('abc')).to.contain('password');
	});

	it('should be able submit the form', () => {
		expect(login.clickSubmit()).to.contain('click');
	});

});