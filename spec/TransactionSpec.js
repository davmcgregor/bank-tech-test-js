'use strict'

describe ('Transaction', function() {
  var transaction

  beforeEach(function() {
    transaction = new Transaction();
  })

  it('should be a defined object', function() {
    expect(transaction instanceof(Transaction)).toBe(true);
  });
})