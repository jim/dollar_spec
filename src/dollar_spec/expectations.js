$spec.add('beSame', function(expected, actual, message) {
    if (expected === actual) {
        this.result(true);
    } else {
        this.result(false, "Expected " + expected.toString() + " to be the same as " + actual.toString());
    }
});

$spec.add('notBeSame', function(expected, actual, message) {
    if (expected === actual) {
        this.result(true);
    } else {
        this.result(false, "Expected " + expected.toString() + " to not be the same as " + actual.toString());
    }
});

$spec.add('beEqual', function(expected, actual, message) {
    if (expected == actual) {
        this.result(true);
    } else {
        this.result(false, "Expected " + expected.toString() + " but was " + actual.toString());
    }
});

$spec.add('notBeEqual', function(expected, actual, message) {
    if (expected != actual) {
        this.result(true);
    } else {
        this.result(false, "Expected " + expected.toString() + " but was " + actual.toString());
    }
});

$spec.add('beInstanceOf', function(expected, object, message) {
    var pass = object instanceof expected;
    if (pass) {
        this.result(true);
    } else {
        this.result(false, "Expected an array, but was " + typeof(object));
    }
});

$spec.add('beArray', function(object, message) {
    if (object instanceof(Array)) {
        this.result(true);
    } else {
        this.result(false, "Expected an array, but was " + typeof(object));
    }
});

$spec.add('beNull', function(actual, message) {
    if (null === actual) {
        this.result(true);
    } else {
        this.result(false, "Expected " + actual.toString() + " to be null");
    }
});

$spec.add('beFalse', function(actual, message) {
    if (actual === false) {
        this.result(true);
    } else {
        this.result(false, "Expected " + actual.toString() + " to be false");
    }
});

$spec.add('beTrue', function(actual, message) {
    if (actual === true) {
        this.result(true);
    } else {
        this.result(false, "Expected " + actual.toString() + " to be true");
    }
});

$spec.add('change', function(value, callback, message) {
    var originalValue = value();
    callback();
    var newValue = value();
    if (originalValue !== newValue) {
        this.result(true);
    } else {
        this.result(false, 'Expected ' + originalValue + ' to change, but it did not');
    }
});


$spec.add('changeBy', function(amount, value, callback, message) {
    var originalValue = value();
    callback();
    var newValue = value();
    if ((originalValue + amount) == newValue) {
        this.result(true);
    } else {
        this.result(false, 'Expected ' + originalValue + ' to change by ' + amount.toString() + ', but it was ' + newValue.toString());
    }
});

$spec.add('raiseError', function(method, verify) {
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

$spec.add('satisfy', function(method) {
    var result = method();
    if (result === true) {
        this.result(true);
    } else {
        this.result(false, 'did not satisfy the block');
    }
});

$spec.add('notSatisfy', function(method) {
    var result = method();
    if (result === false) {
        this.result(true);
    } else {
        this.result(false, 'satisfied the block');
    }
});