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