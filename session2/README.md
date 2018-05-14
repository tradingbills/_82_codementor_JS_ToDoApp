App.js : the engine
TodoApp : will inherit from the App
Todo class is going to be a todo, as an action item
NEXT write some fake tests for App, Todo and TodoApp
31:00 first test, on App Class and method of app class
36:00 moving on to working with prototype, moving getState() from App class to prototype of App
20180507
  _82
   babel/env http://babeljs.io/env
  chai instancof
  _82 App making an instance of the App class.
  making a class C:\Users\tradingbills\Documents\_exer\_nodejs\_82-codeMentor-JoshMiller\session2\test
  mocha --compilers js:../../node_modules/babel-core/register App.spec.js
  screenshot: https://www.dropbox.com/s/6ed20aqxzu2h5x6/2018-05-07_13-20-15.png?dl=0
  Most work was on babel and getting it to work for testing
  then for testing on the App class, making an instance using:
  expect(instance).to.be.an.instanceof(App);
  and making a method on App and using:
  const actual = typeof instance2.getInfo();
  expect(actual).to.equal(expected);
{ "date": "Tues 05/08/2018"
Review yeserday
"gen-61": "_82 codementor"
Referencing a function as a class with the 'new' keyword versus using the function to return a value
new creates instance ,but if the class is returning
something then the variable will take on that value
ex: instance = [new] App()
if App was set to return a value like true then instance is true, 
  else if no return then undefined,
   else if 'new' then instance = App()
Summary to 35:00 we're making an instance of App and adding functionality
  to it. We're also testing our instance to confirm 
36:00 App.prototype will create some type of object
  revise using protype and test without making changes to the test
  now the get state is the same, but the result of the function is not, ie:
  PASS expect(instance3.getState).to.equal(instance4.getState) PASS
  FAIL expect(instance3.getState()).to.equal(instance4.getState()) FAIL
39:00 now set the App.protoype.getState to return a value other than an 
  empty object, give it a 'this' value
  ie. 2 components needed. (1.) in the protype assignment of getState it
  returns the value this.state, (2.) define this.state in the App class 
  to a value of {} 
39:26 overriding the getState method
41:50 setState, something similar
45:40 Summary: why set state on the protype? Its an internal implementation
  details for memory, and tests won't change. This removes fraility when
  setting state anywhere.
commit 45:40 getter and setter on App Class' prototype with testing
balsamiq: C:\Users\tradingbills\Documents\_exer\_balsamiq\_82_codementor_javascript
make remote public repo on github at trading bill
20180514 Summary: App.js has 1 mewthod at this time, but performs no functionality in the App.js. It only defines this.state
as an object. However, a get and set were added to the protoype in the app.js class
App.prototype.getState
App.prototype.setState(state)
where 
get returns &
set assigns
Test created to 
- instanceof
- getState typeof object
- getState comparision on different instances
- setState works as expected when assigning

 ex: git remote add origin git@github.com:tradingbills/_82_codementor_JS_ToDoApp.git
zendesk items
encapsulation to hide data or implementation details
property getter and setters for all
set lowerUTC
set upperUTC
set lowerEPOCH
set upperEPOCH
getter and setter define the classes interface for the rest of the operation
encapsulated units protects the data, so no other code and manipulate,
code can be added to the getters and setter
Theory, gaurd inside the setter, the class only offers public get and set
Object oriented fundamentals. 
Structure: UI (user interface), BL (business logic), DL (data layer), Common (code for other layers) [all follow the principle of encapsulation]
building BL
add entitiy classes, give public accessibility, classes are types
add properties to classes, 1-firstname, 2-lastname. Hide data with backing fields. 
get 
set
Summary, define the variable, define the backing field with the set and get access.
20180514 /class/TimeRange
  1526313864: {"SUMMARY": "There are two things working , 
  (1.) zen and its test, 
  (2.) codementor and protoype to encapsulate. zen previous attempt to encapsulate lowerUTC failed, reverted}
  TODO: encapsulate lowerUTC and upperUTC
  TODO: take input value and us it for looping