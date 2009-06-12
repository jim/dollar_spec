DollarSpec
==========

Dollar spec is a tiny JavaScript spec framework that gets out of the way and lets you get things done. It supports nested describes and before/after filters, but that is about it. The standard set of expectations is small right now, but they are easy to add.

## Why another JavaScript spec framework?

I wanted a small, pure-JS framework that supported a syntax I didn't have to think too much to use. I wanted to only add as much syntax as was neccessary, and leave the rest to JavaScript. I want to run JavaScript tests from the console; the HTML files currently being used are just a starting point.

## Getting Started

You'll probably want to build a 

Here's a sample spec (you can see the complete example in example/addition.html):

    $spec.describe('my awesome addition function', function(spec) {

        var add = function() {
           var total = 0;
           for (var i = 0, l = arguments.length; i < l; i++) {
               total += arguments[i];
           }
           return total;
        };
    
        spec.before(function() {
            // don't need to set anything up this time
        });
    
        spec.it('adds two numbers', function(should) {
            should.beEqual(4, add(2,2));
        });

        spec.it('adds three numbers', function(should) {
            should.beEqual(4, add(2,1,1));
        });

        // to show a failing spec
        spec.it('adds two numbers', function(should) {
            should.beEqual(5, add(2,1));
        });

        // to show a pending spec
        spec.it('casts and adds strings', function(should) {
        });
    });
    
    $spec.run();
    
If you run this inside Firefox, you will get some messages in the Firebug console, although these can be adjusted to your liking:

    // To disable console output (defaults to true)
    $spec.opts.console = false;

    // Print a line to the console for each test (defaults to false)
    $spec.opts.verbose = true;

I haven't gotten a packaging solution together yet, but you should be able to get something simple going by using spec/runner.html as a guide.

## Custom expectations

DollarSpec's expectations follow a simple convention- expectations are just functions that call <code>this.result()</code> with a result value and an an optional message. The result value can be true, false, or null( for pending specs).

## Inspiration

I've looked at most of the various JavaScript TDD/BDD libraries in the past few weeks. I'm trying to achieve the functionality of RSpec, but with the smallest possible syntax, and hopefully without the use of <code>with</code>.

## Alternatives

You should probably take a look at [ScrewUnit](http://github.com/nathansobo/screw-unit/tree/master) if you're looking for a more complete/mature BDD framework.

## Feedback

Thoughts and feedback are welcomes and encouraged.