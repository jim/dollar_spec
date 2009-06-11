$spec.Should = function(expectations) {
    this.success = [null, '(pending)'];
    for (var i =0, l = expectations.length; i < l; i++) {
        this[expectations[i][0]] = expectations[i][1];
    }
};