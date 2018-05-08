const App = function() {
  this.state = {};
};

App.prototype.getState = function () { 
  return this.state;
};
App.prototype.setState = function ( newState ) {
  this.state= newState;
}

export default App;

