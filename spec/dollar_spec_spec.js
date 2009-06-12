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
});

$spec.describe('before and after callbacks', function(spec) {
    spec.describe('before', function(spec) {
        var runs = 0;

        spec.before(function() {
            runs += 1; 
        });

        spec.it('calls before before the first spec', function(should) {
            should.beEqual(1, runs);
        });

        spec.it('calls before before the second spec', function(should) {
            should.beEqual(2, runs);
        });
    });

    spec.describe('after', function(spec) {
        var zeroed;

        spec.after(function() {
            zeroed = true; 
        });

        spec.it('calls after after the first spec', function(should) {
            zeroed = false;
            should.beFalse(zeroed);
        });

        spec.it('calls after after the first spec', function(should) {
            should.beTrue(zeroed);
        });
    }); 
});