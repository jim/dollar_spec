$spec.describe('my awesome addition function', function(spec) {

    var add = function() {
       var total = 0;
       for (var i = 0, l = arguments.length; i < l; i++) {
           total += arguments[i];
       }
       return total;
    };
    
    spec.before(function() {
        // don't need to set anything up this time
    });
    
    spec.it('adds two numbers', function(should) {
        should.beEqual(4, add(2,2));
    });

    spec.it('adds three numbers', function(should) {
        should.beEqual(4, add(2,1,1));
    });

    // to show a failing spec
    spec.it('adds two numbers', function(should) {
        should.beEqual(5, add(2,1));
    });

    // to show a pending spec
    spec.it('casts and adds strings', function(should) {
    });
});