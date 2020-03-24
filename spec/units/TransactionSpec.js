'use strict'

describe ('Transaction', function() {
  
  var transaction

  beforeEach(function() {
    transaction = new Transaction(10, 10, new Date());
  });

  it('should be a defined object', function() {
    expect(transaction instanceof(Transaction)).toBe(true);
  });

  it('should contain an amount property', function() {
    expect(transaction.amount).toBe(10)
  });

  it('should contain a balance amount', function() {
    expect(transaction.balance).toBe(10)
  });

  it('should contain a date', function() {
    expect(transaction.date).toEqual(new Date())
  });
});