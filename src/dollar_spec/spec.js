var Scope = function() {

  var data = {};

  for (var i =0, l = $spec.matchers.length; i < l; i++) {
    this[$spec.matchers[i][0]] = $spec.matchers[i][1];
  }

  for (var i =0, l = $spec.verbs.length; i < l; i++) {
    this[$spec.verbs[i][0]] = $spec.verbs[i][1];
  }

  this.to = this;

  this.set = function(name, value) {
    data[name] = value;
  };
  
  this.data = function() {
    return data;
  };
};

$spec.Spec = function(name, method) {
    var expectations = [];
    var data = {};
    var scope;

    data.name = name;

    var clearStack = function() {
      scope.set('name', name);
      var meta = {};
      
      result = $spec.matchers[scope.data().matcher].call(scope.data(), meta);
      
      if (scope.data().negated === true) {
        scope.set('result', !result);
        if ((!result) === false && meta.negatedFailure) {
          scope.set('message', meta.negatedFailure);
        }
      } else {
        scope.set('result', result);
        if ((result) === false && meta.failure) {
          scope.set('message', meta.failure);
        }
      }

      expectations.push(scope.data());
    }

    var run = function() {
      var expecter = function(actual) {
        if (typeof(scope) != 'undefined') {
          clearStack();
        }
        scope = new Scope();
        scope.set('actual', actual);
        scope.set('name', name);
        return scope;
      };
      
      var returned = method.call({}, expecter);
      if (typeof(scope) != 'undefined') {
        clearStack();
      }     
      if (returned === false || expectations.length == 0) {
          data.success = null;
          return;
      // } else if (result === true) {
          // data.success = undefined;
      } else {
        for (var i=0, l=expectations.length; i<l; i++) {
          var e = expectations[i];
          if (e.result == false) {
            data.success = false; 
            data.message = e.message;
            return;
          }
        }
        data.success = true;
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
      data.message = exception.message;
      data.fileName = exception.fileName;
      data.lineNumber = exception.lineNumber;
      data.stack = exception.stack;
    };

};

