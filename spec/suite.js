include('diligence/diligence.js');

function color(command, text) {
  return "\033[" + command + "m" + text + "\033[0m";
}

function onLoad() {
    
  new diligence.Server(function(setup) {
    // setup.debug = true;
    setup.publicPath = 'diligence/public';
    setup.runnerPath = 'runner.html';
    setup.testPaths = [
      '../src/dollar_spec.js',
      '../src/dollar_spec/expectations.js',
      '../src/dollar_spec/should.js',
      '../src/dollar_spec/spec.js',
      'dollar_spec_spec.js',
      'dollar_spec/expectations_spec.js',
      'dollar_spec/should_spec.js',
      'dollar_spec/spec_spec.js',
      'respond.js'
    ];
    setup.process = function(browser, results) {
      
      puts('');
      puts(browser.name);
        
      if (results.failed.length > 0) {
        puts(color('31', results.failed.length.toString() + ' failures:'));
        for(var i=0,l=results.failed.length; i<l; i++) {
          puts('  *  ' + results.failed[i].name);
          puts('     ' + results.failed[i].errorName + ': ' + results.failed[i].message);
          puts('     in line ' + results.failed[i].lineNumber + ' of ' + results.failed[i].fileName);
          
          // need to do some stacktrace filtering
          // puts('     ' + results.failed[i].stack);
        }
      }
      
      if (results.pending.length > 0) {
        puts(color('33', results.pending.length.toString() + ' pending'));
      }
      
      if (results.passed.length > 0) {
        puts(color('32', results.passed.length.toString() + ' passed'));
      }

    };
  });

}