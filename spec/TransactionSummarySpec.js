'use strict'

describe ('TransactionSummary', function() {
  
  var transaction_summary 

  beforeEach(function() {
    transaction_summary = new TransactionSummary();
  });

  it('should be a defined object', function() {
    expect(transaction_summary instanceof(TransactionSummary)).toBe(true);
  });

  it('should have a summary property', function() {
    expect(transaction_summary.summary).toEqual([]);
  });

});

