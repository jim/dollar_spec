$spec.add('beSame', function(expected, actual, message) {
    if (expected == actual) {
        this.success = [true];
    } else {
        this.success = [false, "Expected " + expected.toString() + " to be the same as " + actual.toString()];
    }
});

$spec.add('notBeSame', function(expected, actual, message) {
    if (expected == actual) {
        this.success = [true];
    } else {
        this.success = [false, "Expected " + expected.toString() + " to not be the same as " + actual.toString()];
    }
});

$spec.add('beEqual', function(expected, actual, message) {
    if (expected == actual) {
        this.success = [true];
    } else {
        this.success = [false, "Expected " + expected.toString() + " but was " + actual.toString()];
    }
});

$spec.add('notBeEqual', function(expected, actual, message) {
    if (expected != actual) {
        this.success = [true];
    } else {
        this.success = [false, "Expected " + expected.toString() + " but was " + actual.toString()];
    }
});

$spec.add('beNull', function(actual, message) {
    if (null === actual) {
        this.success = [true];
    } else {
        this.success = [false, "Expected " + actual.toString() + " to be null"];
    }
});

$spec.add('beFalse', function(actual, message) {
    if (actual === false) {
        this.success = [true];
    } else {
        this.success = [false, "Expected " + actual.toString() + " to be false"];
    }
});

$spec.add('beTrue', function(actual, message) {
    if (actual === true) {
        this.success = [true];
    } else {
        this.success = [false, "Expected " + actual.toString() + " to be true"];
    }
});