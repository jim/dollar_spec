$spec.describe('Should', function(spec) {
    spec.it('will return the first failing expectation', function(should) {
        var s = new $spec.Should($spec.expectations);
        s.result(true);
        s.result(false, 'failure message');
        s.result(false, 'another failure message');

        var outcome = s.outcome();
        should.beEqual(false, outcome.success);
        should.beEqual('failure message', outcome.message);
    });

    spec.it('will assume its pending without any expectations', function(should) {
        var s = new $spec.Should($spec.expectations);

        var outcome = s.outcome();
        should.beNull(outcome.success);
        should.beEqual('undefined', typeof(outcome.message));
    });
});