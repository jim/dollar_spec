var puts = require('sys').puts;
var diligence = require('./diligence/diligence');
var sys = require('sys');

function color(command, text) {
  return "\033[" + command + "m" + text + "\033[0m";
}
    
diligence.createServer(function(setup) {
  setup.root = __dirname;
  // setup.debug = true;
  setup.publicPath = 'diligence/public';
  setup.runnerPath = 'runner.html';
  setup.testPaths = [
    '../src/dollar_spec.js',
    '../src/dollar_spec/verbs.js',
    '../src/dollar_spec/matchers.js',
    '../src/dollar_spec/spec.js',
    '../src/vendor/stacktrace.js',
    'dollar_spec_spec.js',
    'dollar_spec/matchers_spec.js',
    'dollar_spec/spec_spec.js',
    'respond.js'
  ];
  setup.process = function(browser, results) {
    
    puts(' ');
    puts(browser.name);

    if (results.failed.length > 0) {
      puts(color('31', results.failed.length.toString() + ' failures:'));
      for(var i=0,l=results.failed.length; i<l; i++) {
        var failed = results.failed[i];

        puts('  *  ' + failed.name);
        puts('     ' + failed.errorName + ': ' + failed.message);

        if (failed.stack) {        
          puts('     on ' + color('35', 'line ' + failed.line) + ' of ' + color('34', failed.file));
        }
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