$spec.describe('Spec', function(spec) {
    spec.it('will treat a callback that returns false as pending', function(expect) {
        var number = 4;
        var spec = new $spec.Spec('test pending', function(expect) {
            expect(number).to.equal(5);
            return false;
        });

        spec.run();

        expect(spec.success()).to.equal(null);
    }); 
});