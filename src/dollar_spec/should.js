$spec.Should = function(expectations) {
    var results = [];
    this.result = function(success, message) {
        results.push([success, message]);
    };
    
    this.outcome = function() {
        if (results.length == 0) {
            return {success: null};
        }
        for (var i =0, l = results.length; i < l; i++) {
            var result = results[i];
            if (result[0] !== true) {
                return {success: result[0], message: result[1]};
            }
        }
        return {success: true};
    };
    
    // setup expectation methods
    for (var i =0, l = expectations.length; i < l; i++) {
        this[expectations[i][0]] = expectations[i][1];
    }
};