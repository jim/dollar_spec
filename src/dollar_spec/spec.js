$spec.Spec = function(name, method, expectations) {
    var data = {};

    data.name = name;
        
    var run = function() {
        var should = new $spec.Should(expectations);
        var temp = {};
        var result = method.call(temp, should);
        
        if (result === false) {
            data.success = null;
        } else if (result === true) {
            data.success = undefined;
        } else {
            var status = should.outcome();
            data.success = status.success;
            data.message = status.message;
        }
    };
    this.run = run;
    
    this.success = function() {
        return data.success;
    };

    this.message = function() {
        return data.message;
    };
    
    this.name = function() {
        return data.name;
    };
    
    this.data = function() {
      return data;
    };
    
    this.recover = function(exception) {
      data.success = false;
      data.errorName = exception.name;
      data.message = exception.message || exception.message;
      data.fileName = exception.fileName;
      data.lineNumber = exception.lineNumber;
      data.stack = exception.stack;
    };

};

