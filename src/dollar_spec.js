//  DollarSpec
//  JavaScript testing with minimal syntax

var $spec = (function() {

    // public methods
    var expectation, expectations, describe, it, report, reportToConsole, run, stats;

    // private methods
    var pass, pend, fail;

    // private properties
    var specs, failed, passed, pending, runners;
    
    passed = [];
    failed = [];
    pending = [];
    expectations = [];
    runners = [];
    specs = [];
    
    var Runner = function(namespaces, befores, afters) {
                
        // public methods
        var before, after, it, describe;

        // private properties
        var befores, afters;

        befores = [];
        afters = [];
        
        before = function(callback) { befores.push(callback) };
        this.before = before;

        after = function(callback) { afters.push(callback) };
        this.after = after;

        it = function(name, method) {
            var completeName = namespaces.join(' ') + ' ' + name;
            specs.push([completeName, method, befores, afters]);
        };
        this.it = it;
        
        describe = function(namespace, callback) {
            var newNamespaces = namespaces.slice(0);
            newNamespaces.push(namespace);
            var newBefores = befores.slice(0);
            var newAfters = afters.slice(0);
            var runner = new Runner(newNamespaces, newBefores, newAfters);
            callback.call({}, runner);
        };
        this.describe = describe;
    };    
    
    describe = function(namespace, callback) {
        var runner = new Runner([namespace], [], []);
        callback.call({}, runner);
    };
    
    run = function() {
        
        var execute = function(methods) {
            for (var i=0,l=methods.length; i<l; i++) {
                methods[i].call({});
            }
        };
        
        for (var i=0, l=specs.length; i < l; i++) {
            
            var spec, name = specs[i][0], method = specs[i][1];
            var befores = specs[i][2], afters = specs[i][3];
            spec = new $spec.Spec(name, method, expectations);
            
            execute(befores);
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
            execute(afters);
        }
        
        if ($spec.opts.console) {
            console.debug(reportToConsole());
        }
    };
    
    report = function() {        
        var response = {};
        var build = function(collection, name, specs) {
            response[name] = [];
            for (var i=0,l=specs.length; i < l; i++) {
                var spec = specs[i]
                response[name].push({
                    name: spec.name(),
                    success: spec.success(),
                    message: spec.message()
                });
            }
        };
        
        build(response, 'passed', passed);
        build(response, 'failed', failed);        
        build(response, 'pending', pending);

        return response;
    };
    
    reportToConsole = function() {
        return "There are " + passed.length.toString() + ' passing, '
                            + failed.length.toString() + ' failing, and '
                            + pending.length.toString() + ' pending specs!';
    };
    
    expectation = function(name, method) {
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
        expectation: expectation,
        describe: describe,
        it: it,
        run: run,
        report: report,
        reportToConsole: reportToConsole,
        expectations: expectations,
        stats: stats
    };

})();

$spec.opts = {
    console: true,
    verbose: true
};