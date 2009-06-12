DollarSpec
==========

Dollar spec is a tiny JavaScript spec framework that gets out of the way and lets you get things done. It supports nested describes and before/after filters, but that is about it. The standard set of expectations is small right now, but they are easy to add.

## Why another JavaScript spec framework?

I wanted a small, pure-JS framework that supported a syntax I didn't have to think too much to use. I wanted to only add as much syntax as was neccessary, and leave the rest to JavaScript. I want to run JavaScript tests from the console; the HTML files currently being used are just a starting point.

Also, I wanted minimal namespace usage. DollarSpec creates a single global entity, <code>$spec</code>.

## Building the project

You'll probably want to build a distributable file for any kind of real use. Inside the root directory, run:

    ../build
    
And you'll have a brand spanking new file at dist/dollar_spec.js for use as you se fit.

## Getting Started

Here's a sample spec (you can see the complete example in example/addition.html):

    $spec.describe('my awesome addition function', function(spec) {
        
        var add = function() {
           var total = 0;
           for (var i = 0, l = arguments.length; i < l; i++) {
               total += arguments[i];
           }
           return total;
        };
    
        spec.it('adds two numbers', function(should) {
            should.beEqual(4, add(2,2));
        });
    });
    
    $spec.run();
    
If you run this inside Firefox, you will get some messages in the Firebug console, although these can be adjusted to your liking:

    // To disable console output (defaults to true)
    $spec.opts.console = false;

    // Print a line to the console for each test (defaults to false)
    $spec.opts.verbose = true;

## Custom expectations

DollarSpec's expectations follow a simple convention- expectations are just functions that call <code>this.result()</code> with a result value and an an optional message. The result value can be true, false, or null (for pending specs).

This is how the <code>beEqual</code> expectation is implemented:

    $spec.add('beSame', function(expected, actual, message) {
        if (expected === actual) {
            this.result(true);
        } else {
            this.result(false, "Expected " + expected.toString() + " to be the same as " + actual.toString());
        }
    });
    
You can expectations of your own by following this pattern.

## API

None yet, check out expectations for what is supported. Sorry!

## Inspiration

I've looked at most of the various JavaScript TDD/BDD libraries in the past few weeks. I'm trying to achieve the functionality of RSpec, but with the smallest possible syntax, and hopefully without the use of <code>with</code>.

## Alternatives

You should probably take a look at [ScrewUnit](http://github.com/nathansobo/screw-unit/tree/master) if you're looking for a more complete/mature BDD framework.

## Feedback

Thoughts and feedback are welcomed and encouraged.