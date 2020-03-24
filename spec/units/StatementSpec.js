'use strict'

describe ('Statement', function() {
  
  var statement
  var transactionSummary

  beforeEach(function() {
    transactionSummary = new TransactionSummary();
    statement = new Statement(transactionSummary);
  });

  it('should be a defined object', function() {
    expect(statement instanceof(Statement)).toBe(true);
  });

  it('should have a summary property', function() {
    expect(statement.summary).toBeDefined();
  });

  it('should have the correct transactions property', function() {
    expect(statement.summary).toBe(transactionSummary);
  });

  describe('#addTransaction', function() {

    beforeEach(function() {
      spyOn(transactionSummary, 'pushTransaction');
    });

    it('should add transaction to the history', function() {
      statement.addTransaction(100, 100);
      expect(statement.summary.pushTransaction).toHaveBeenCalled();
    });
  });

  describe('#display', function() {

    var display;
    var date;

    beforeEach(function() {
      display    = "date      || credit  || debit   || balance" + '\n';
      date       = new Date().toLocaleString().split(',')[0];
    });

    it('should display the headers', function() {
      expect(statement.display()).toContain(display);
    });

    it('should display the date in the correct format', function() {
      statement.addTransaction(100, 10)
      expect(statement.display()).toContain(date);
    });

    it('should display the correct transaction amount', function() {
      statement.addTransaction(100, 10)
      expect(statement.display()).toContain(100.00);
    });
  });

});