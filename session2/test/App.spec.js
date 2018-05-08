import App from '../App';
const expect= require('chai').expect;
const should= require('chai').should();
describe('App Class ' , () => {
	it('Make an instance of the class App',()=>{
		const instance = new App();
		expect(instance).to.be.an.instanceof(App);
	})
	it('getState() method is an object on the App class', () => {
		const instance2 = new App();
		const expected = 'object';
		const actual = typeof instance2.getState();
		expect(actual).to.equal(expected);
	})
})
	

