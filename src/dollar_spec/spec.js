$spec.Spec = function(specName, method, expectations) {
    var data = {};
    
    var run = function() {
        var should = new $spec.Should(expectations);
        var temp = {};
        var result = method.call(temp, should);
        data.success = should.success[0];
        data.message = should.success[1];
    };
    this.run = run;
    
    var success = function() {
        return data.success;
    };
    this.success = success;

    var message = function() {
        return data.message;
    };
    this.message = message;
    
    var name = function() {
        return specName;
    };
    this.name = name;
    
    var recover = function(exception) {
        data.success = false;
        data.message = exception.message;
    };
    this.recover = recover;
};