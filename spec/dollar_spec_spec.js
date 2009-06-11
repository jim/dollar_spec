$spec.it('tests for equality using booleans', function(should) {
    should.beEqual(true, true, 'did not match');
});

$spec.it('tests for inequality using booleans', function(should) {
    should.notBeEqual(true, false, 'matched');
});

var a = 1, b = 2;
$spec.it('tests for different objects', function(should) {
    should.notBeSame(a, 1, 'were the same');
});

$spec.it('tests for same object', function(should) {
    should.beSame(a, a, 'were not the same');
});

$spec.it('tests for null', function(should) {
    should.beNull(null, 'was not null');
});

$spec.it('tests for false', function(should) {
    should.beFalse(false, 'was not false');
});

$spec.it('tests for true', function(should) {
    should.beTrue(true, 'was not true');
});