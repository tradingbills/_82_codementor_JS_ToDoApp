import App from '../App';
const expect= require('chai').expect;
const should= require('chai').should();
describe('App Class ' , () => {
	it('Make an instance of the class App',()=>{
		const app = new App();
		expect(app).to.be.instanceof(App);
	})
	it('getState() method is an object added onto the App.protoype', () => {
		const app2 = new App();
		const expected = 'object';
		const actual = typeof app2.getState();
		expect(actual).to.equal(expected);
	})
	it('checks usage of prototype on two instances using getState are the same', () => {
		const app3 = new App();
		const app4 = new App();
		expect(app3.getState).to.equal(app4.getState)
	})
	it('sets state to an object', () => {
		const expected= {};
		const app45= new App();
		app45.setState( expected );
		const actual = typeof app45.getState()
		const testExpected = 'object'
		expect(testExpected).to.equal(actual)
	})
	it('sets a state', () => {
		const newState = {};
		const expected = newState;

		const app5 = new App();
		app5.setState( newState );
		const actual= app5.getState();
		
		expect(actual).to.equal(expected)
	})
})
	

