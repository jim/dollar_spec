$spec.expectation('beSame', function(expected, actual, message) {
    if (expected === actual) {
        this.result(true);
    } else {
        this.result(false, "Expected " + expected.toString() + " to be the same as " + actual.toString());
    }
});

$spec.expectation('notBeSame', function(expected, actual, message) {
    if (expected === actual) {
        this.result(true);
    } else {
        this.result(false, "Expected " + expected.toString() + " to not be the same as " + actual.toString());
    }
});

$spec.expectation('beEqual', function(expected, actual, message) {
    if (expected == actual) {
        this.result(true);
    } else {
        this.result(false, "Expected " + expected.toString() + " but was " + actual.toString());
    }
});

$spec.expectation('notBeEqual', function(expected, actual, message) {
    if (expected != actual) {
        this.result(true);
    } else {
        this.result(false, "Expected " + expected.toString() + " but was " + actual.toString());
    }
});

$spec.expectation('beInstanceOf', function(expected, object, message) {
    var pass = object instanceof expected;
    if (pass) {
        this.result(true);
    } else {
        this.result(false, "Expected an array, but was " + typeof(object));
    }
});

$spec.expectation('beArray', function(object, message) {
    if (object instanceof(Array)) {
        this.result(true);
    } else {
        this.result(false, "Expected an array, but was " + typeof(object));
    }
});

$spec.expectation('beNull', function(actual, message) {
    if (null === actual) {
        this.result(true);
    } else {
        this.result(false, "Expected " + actual.toString() + " to be null");
    }
});

$spec.expectation('beFalse', function(actual, message) {
    if (actual === false) {
        this.result(true);
    } else {
        this.result(false, "Expected " + actual.toString() + " to be false");
    }
});

$spec.expectation('beTrue', function(actual, message) {
    if (actual === true) {
        this.result(true);
    } else {
        this.result(false, "Expected " + actual.toString() + " to be true");
    }
});

$spec.expectation('change', function(value, callback, message) {
    var originalValue = value();
    callback();
    var newValue = value();
    if (originalValue !== newValue) {
        this.result(true);
    } else {
        this.result(false, 'Expected ' + originalValue + ' to change, but it did not');
    }
});


$spec.expectation('changeBy', function(amount, value, callback, message) {
    var originalValue = value();
    callback();
    var newValue = value();
    if ((originalValue + amount) == newValue) {
        this.result(true);
    } else {
        this.result(false, 'Expected ' + originalValue + ' to change by ' + amount.toString() + ', but it was ' + newValue.toString());
    }
});

$spec.expectation('raiseError', function(method, verify) {
    var should = this;
    verify = verify || function(e) { 
        should.beInstanceOf(Error, e);
    };
    try {
        method();
        this.result(false, 'did not raise an error');
    } catch(e) {
        verify(e);
    }
});

$spec.expectation('satisfy', function(method) {
    var result = method();
    if (result === true) {
        this.result(true);
    } else {
        this.result(false, 'did not satisfy the block');
    }
});

$spec.expectation('notSatisfy', function(method) {
    var result = method();
    if (result === false) {
        this.result(true);
    } else {
        this.result(false, 'satisfied the block');
    }
});