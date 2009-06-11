DollarSpec
==========

Dollar spec is a tiny JavaScript spec framework that gets out of the way and lets you get things done. It doesn't support nested describes or anything too fancy, but it's designed in such a way that you can easily add features as you see fit.

I just never understood why spec/test frameworks were so big.

Here's a sample spec:

    var add = function() {
        
    };

    $spec.it('can perform simple addition', function(should) {
        should.beEqual(4, add(2,2));
    });
    
    $spec.run();
    
If you run this inside Firefox, you will get some messages in the Firebug console, although these can be adjusted to your liking:

    // To disable console output (defaults to true)
    $spec.opts.console = false;

    // Print a line to the console for each test (defaults to false)
    $spec.opts.verbose = true;

I haven't gotten a packaging solution together yet, but you should be able to get something simpe going by using spec/runner.html as a guide.