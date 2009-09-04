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
    
    spec.it('adds two numbers', function(expect) {
        expect(add(2,2)).to.equal(4);
    });

    spec.it('adds three numbers', function(expect) {
        expect(add(1,1,2)).to.equal(4);
    });

    // to show a failing spec
    spec.it('adds two numbers', function(expect) {
        expect(add(1,1,2)).to.equal(5);
    });

    // to show a pending spec
    spec.it('casts and adds strings');
});