$spec.describe('expectations', function(spec) {
    spec.it('tests for equality using booleans', function(should) {
        should.beEqual(true, true, 'did not match');
    });

    spec.it('tests for inequality using booleans', function(should) {
        should.notBeEqual(true, false, 'matched');
    });

    var a = 1, b = 2;
    spec.it('tests for different objects', function(should) {
        should.notBeSame(a, 1, 'were the same');
    });

    spec.it('tests for same object', function(should) {
        should.beSame(a, a, 'were not the same');
    });

    spec.it('tests for null', function(should) {
        should.beNull(null, 'was not null');
    });

    spec.it('tests for false', function(should) {
        should.beFalse(false, 'was not false');
    });

    spec.it('tests for true', function(should) {
        should.beTrue(true, 'was not true');
    });

    spec.it('tests for an array', function(should) {
        should.beArray([], 'was not an array');
    });
    
    spec.it('tests for an instance', function(should) {
        should.beInstanceOf(Array, [], 'was not an instance of array');
    });

    spec.it('test for changing the value of a block', function(should) {
        var weapon = 'Hammer of Gruumsh';
        should.change(function() {
            return weapon;
        }, function() {
            weapon = "Twinkle Sword of Drizzt Do'Urden";
        }, 'did not change');
    });

    spec.it('test for changing by a specific numeric value', function(should) {
        var swordCount = 45;
        should.changeBy(10, function() {
            return swordCount;
        }, function() {
            swordCount = 55;
        }, 'did not increase by ten');
    });

    spec.it('accepts more than one should statement per block', function(should) {
        var opponent = 'Blue dragon';
        should.beEqual('Blue dragon', opponent);
        should.beEqual(11, opponent.length);
    });
    
    spec.it('tests for raised errors', function(should) {
        should.raiseError(function() {
          doesnt.exist();
        });
    });
    
    spec.it('tests for specific errors using a callback', function(should) {
        should.raiseError(function() {
          doesnt.exist();
        }, function(e) {
          should.beEqual('ReferenceError', e.name);
        });
    });
   
   
    spec.it('tests for satisfying a block', function(should) {
        should.satisfy(function() {
            return true;
        });
    });
    
    spec.it('tests for not satisfying a block', function(should) {
        should.notSatisfy(function() {
            return false;
        });
    });
});