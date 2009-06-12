$spec.it('will treat a callback that returns false as pending', function(should) {
    var number = 4;
    var spec = new $spec.Spec('test pending', function(should) {
        should.beEqual(5, number);
        return false;
    }, $spec.expectations);
    
    spec.run();
    
    should.beNull(spec.success());
});