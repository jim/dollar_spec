//  DollarSpec
//  JavaScript testing with minimal syntax

var $spec = (function() {
    
    // public methods
    var add, it, report, run, stats;

    // private methods
    var fail;

    // private properties
    var expectations, specs, failed, passed, pending;
    
    passed = [];
    failed = [];
    pending = [];
    expectations = [];
    specs = [];
    
    it = function(name, method) {
        specs.push([name, method]);
    };
    
    run = function() {
        
        for (var i=0, l=specs.length; i < l; i++) {
            var spec, name = specs[i][0], method = specs[i][1];
            
            spec = new $spec.Spec(name, method, expectations);
            try {
                spec.run();
                if (spec.success() === true) {
                    pass(spec);
                } else if (spec.success() === false) {
                    fail(spec);
                } else {
                    pend(spec);
                }
            } catch(e) {
                spec.recover(e);
                fail(spec);
            }
        }
        
        if ($spec.opts.console) {
            console.debug(report());
        }
    };
    
    report = function() {
        return "There were " + passed.length.toString() + ' passing, '
                             + failed.length.toString() + ' failing, and '
                             + pending.length.toString() + ' pending specs!';
    };
    
    add = function(name, method) {
        expectations.push([name, method]);
    };
    
    pass = function(spec) {
        passed.push(spec);
        if ($spec.opts.console) {
            console.info('PASS ' + spec.name());
        }
    };
    
    pend = function(spec) {
        pending.push(spec);
        if ($spec.opts.console) {
            console.warn('PENDING ' + spec.name());
        }
    };
    
    fail = function(spec) {
        failed.push(spec);
        if ($spec.opts.console) {
            console.error('FAIL ' + spec.name() + ': ', spec.message());
        }
    };
    
    stats = function() {
        return { passed: passed.length,
                 failed: failed.length,
                 pending: pending.length };
    };
    
    return {
        add: add,
        it: it,
        run: run,
        report: report,
        expectations: expectations,
        stats: stats
    };

})();

$spec.opts = {
    console: true,
    verbose: true
};