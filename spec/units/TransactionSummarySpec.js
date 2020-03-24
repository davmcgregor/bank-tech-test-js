
'use strict';

describe('TransactionSummary', function() {

  var transactionSummary

  beforeEach(function() {
    transactionSummary = new TransactionSummary();
  });

  it('should be a defined object', function() {
    expect(transactionSummary instanceof(TransactionSummary)).toBe(true);
  });

  it('should have a summary property', function() {
    expect(transactionSummary.transactions).toBeDefined();
  });

  it('should have the correct transactions property', function() {
    expect(transactionSummary.transactions).toEqual([]);
  });

});