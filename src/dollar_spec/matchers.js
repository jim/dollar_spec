$spec.matcher('beA', function(result) {
  result.failure = "Expected an instance of " + this.klass.toString() + ", but it was " + typeof(this.actual);
  result.negatedFailure = "Expected instance of a class other than " + this.klass.toString() + ", but it was one";
  
  return this.actual instanceof(this.klass);
});

$spec.matcher('beNull', function(result) {
  result.failure = "Expected null, but found " + String(this.actual);
  result.negatedFailure = "Expected a non-null value, but recieved null.";
  
  return this.actual === null;
});

$spec.matcher('equal', function(result) {
  
  var actual = typeof(this.actual) === 'function' ? this.actual() : this.actual;
  var expected = this.expected === null ? 'null' : this.expected;
  
  var actualName = actual === null ? 'null' : actual;
  
  result.failure = "Expected " + actualName.toString() + " to be equal to " + expected.toString();
  result.negatedFailure = "Expected " + actualName.toString() + " to not be equal to " + expected.toString();
  
  return this.expected == actual;

});

$spec.matcher('change', function(result) {
  result.failure = 'Expected ' + originalValue + ' to change, but it did not';
  result.negatedFailure = 'Expected ' + originalValue + ' to not change, but it did';  

  var originalValue = this.affected();
  this.actual();
  var newValue = this.affected();
  
  return originalValue !== newValue;
});

$spec.matcher('changeBy', function(result) {
  var originalValue = this.affected();
  this.actual();
  var newValue = this.affected();
  var difference = newValue - originalValue;
  
  result.failure = 'Expected ' + originalValue + ' to change by ' + this.amount.toString() + ', but it changed by ' + difference.toString();
  result.negatedFailure = 'Expected ' + originalValue + ' to not change by ' + this.amount.toString() + ', but it did';
  
  return difference === this.amount;
});

$spec.matcher('raiseError', function(result) {
  result.failure = "Expected an error to be raised, but it was not";
  result.negatedFailure = "Expected an error to not be raised, but it was";
  
  var verify = this.verify || function(e) {
    return e instanceof(Error);
  };
  
  try {
    this.actual();
    return false;
  } catch(e) {
    return verify(e);
  }
  
});