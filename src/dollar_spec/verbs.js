$spec.verb('by', function(amount) {
  this.set('amount', amount);
  this.set('matcher', 'changeBy');
  return this;
});

$spec.verb('not', function() {
  this.set('negated', true);
  return this;
});

$spec.verb('equal', function(expected) {
  this.set('matcher', 'equal');
  this.set('expected', expected);
  return this;
});

$spec.verb('beNull', function() {
  this.set('matcher', 'beNull');
  return this;
});

$spec.verb('change', function(affected) {
  this.set('matcher', 'change');
  this.set('affected', affected);
  return this;
});

$spec.verb('beA', function(klass) {
  this.set('matcher', 'beA');
  this.set('klass', klass);
  return this;
});

$spec.verb('beAn', function(klass) {
  this.set('matcher', 'beA');
  this.set('klass', klass);
  return this;
});

$spec.verb('raiseError', function(verify) {
  this.set('matcher', 'raiseError');
  this.set('verify', verify);
});