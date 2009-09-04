DollarSpec
==========

Dollar spec is a tiny JavaScript spec framework that gets out of the way and lets you get things done. It supports nested describes and before/after filters, but that is about it. The standard set of expectations is small right now, but they are easy to add.

## Why another JavaScript spec framework?

I wanted a small, pure-JS framework that supported a syntax I didn't have to think too much to use. I wanted to only add as much syntax as was neccessary, and leave the rest to JavaScript. I want to run JavaScript tests from the console.

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

        spec.it('adds two numbers', function(expect) {
            expect(add(2,2)).to.equal(4);
        });
    });
    
    $spec.run();
    
If you run this inside Firefox, you will get some messages in the Firebug console, although these can be adjusted to your liking:

    // To disable console output (defaults to true)
    $spec.opts.console = false;

    // Print a line to the console for each test (defaults to false)
    $spec.opts.verbose = true;

If you don't want to use the console reporting, the results of all specs are collected and returned by <code>$spec.stats()</code>. This makes it easy to do whatever you wish with the results.

## Custom expectations

DollarSpec's expectations are built from two pieces- verbs and matchers.

### Verbs

A verb is a function that can be used in an expectation to define something about the parameters of what is expected. The most basic verbs simply define which matcher to use. Verbs must always return <code>this</code> in order to allow chaining to work. Here is the verb definition for <code>equal</code>:

    $spec.verb('equal', function(expected) {
      this.set('matcher', 'equal');
      this.set('expected', expected);
      return this;
    });

This verb will cause the expectation to use the <code>equal</code> matcher, and stores the value of <code>expected</code> so it can be examined in the matcher later.

### Matchers

Matchers are functions that determine if an expectation passes or fails. They can also define messages to be displayed to the user when a test fails. Here's the <code>beA</code> matcher:

    $spec.matcher('beA', function(result) {
      result.failure = "Expected an instance of " + this.klass.toString() + ", but it was " + typeof(this.actual);
      result.negatedFailure = "Expected instance of a class other than " + this.klass.toString() + ", but it was one";
  
      return this.actual instanceof(this.klass);
    });

<code>result.negatedFailure</code> is the message to be displayed when the tests passes, but was used in a negated expectation using <code>not()</code>.

## Running the test suite

The project's specs use [diligence](http://github.com/jim/diligence), a small JavaScript remote test runner. A copy is included with the project, but you will need a working installation of [Node](http://tinyclouds.org/node/). To run the tests, run these commands from inside the project directory:

    cd spec
    node suite.js
    
And then point your browser to localhost:5678. You should see '23 passed' in the browser, and something similar in the the console.

## Built in verbs and matchers

Keep in mind that any expectation can be negated using <code>not()</code>. For example:

    expect(3).to.not().equal(8);

### expect(actual).to.be(object)

Compares the expected and actual values using <code>===</code>.

### expect(actual).to.beA(Object)

Verifies that <code>actual</code> is an instance of <code>Object</code>.

### expect(actual).to.equal(expected)

Compares <code>actual</code> and <code>expected</code> using <code>==</code>.

### expect(affectorFunction).to.change(affectedFunction)

Compares the value returned from calling <code>affectedFunction</code> before and after calling <code>affectorFunction</code>.

### expect(affectorFunction).to.change(affectedFunction).by(amount)

Compares the difference between the value returned from calling <code>affectedFunction</code> before and after calling <code>affectorFunction</code> to <code>amount</code>.

### expect(callbackFunction).to.raiseError([verifyFunction])

Verifies that <code>callbackFunction</code> raises an exception when called.

Optionally will call <code>verifyFunction</code> and pass in a raised exception for further inspection. <code>verifyFunction</code> must return <code>true</code> or <code>false</code>.

## Inspiration

I've looked at most of the various JavaScript TDD/BDD libraries in the past few weeks. I'm trying to achieve the readability of RSpec, but with the smallest possible syntax, and hopefully without the use of <code>with</code>.

## Alternatives

You should probably take a look at [ScrewUnit](http://github.com/nathansobo/screw-unit/tree/master) if you're looking for a more complete/mature BDD framework.

## Feedback

Thoughts and feedback are welcomed and encouraged.