$spec.describe('expectations', function(spec) {
    spec.it('tests for equality using booleans', function(expect) {
        expect(true).to.equal(true);
        expect(true).to.not().equal(false);
    });

    var a = {}, b = {};
    spec.it('tests for different objects', function(expect) {
        expect(a).to.not().equal(b);
    });
    
    spec.it('tests for same object', function(expect) {
        expect(a).to.equal(a);
    });
    
    spec.it('tests for null', function(expect) {
        expect(null).to.equal(null);
        expect(null).to.beNull();
    });
    
    spec.it('tests for undefined', function(expect) {
        expect(undefined).to.equal(undefined);
        expect(undefined).to.beUndefined();
    });
    
    spec.it('tests for false', function(expect) {
        expect(false).to.equal(false);
        expect(true).to.not().equal(false);
    });
    
    spec.it('test for changing by a specific numeric value', function(expect) {
        var swordCount = 45;
        expect(function() {
          swordCount = 55
        }).to.change(function(){
          return swordCount;
        }).by(10);
    });

    spec.it('tests for true', function(expect) {
      expect(true).to.equal(true);
    });
    
    spec.it('tests for an instance', function(expect) {
      expect([]).to.beA(Array);
      expect([]).to.beAn(Array);
      expect('a  string!').to.not().beA(Array);
      expect(null).to.not().beA(String);
    });

    spec.it('test for changing the value of a block', function(expect) {
        var weapon = 'Hammer of Gruumsh';
        expect(function() {
          weapon = "Twinkle Sword of Drizzt Do'Urden";
        }).to.change(function() {
          return weapon;
        });
    });
    
    spec.it('accepts more than one should statement per block', function(expect) {
        var opponent = 'Blue dragon';
        expect(opponent).to.equal('Blue dragon');
        expect(opponent.length).to.equal(11);
    });
    
    spec.it('tests for raised errors', function(expect) {
      expect(function() {
        doesnt.exist();
      }).to.raiseError();
    });
    
    spec.it('tests for specific errors using a callback', function(expect) {
      expect(function() {
        doesnt.exist();
      }).to.raiseError(function(e) {
        return e.name == 'ReferenceError';
      });
    });
      
    spec.it('tests for satisfying a block with a specific object', function(expect) {
        expect(function() {
            return true;
        }).to.equal(true);
    });
    
    spec.it('tests for satisfying a block using equal', function(expect) {
        expect(function() {
            return 34 + 123;
        }).to.equal(157);
    });

    spec.it('tests for not satisfying a block', function(expect) {
        expect(function() {
            return false;
        }).to.not().equal(true);
    });
});