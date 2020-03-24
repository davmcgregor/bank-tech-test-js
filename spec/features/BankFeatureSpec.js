// to align with acceptance criteria

'use strict';

describe('Features', function() {
  var myAccount
  var statement
  var transactionSummary
  var date
  var amount

  beforeEach(function() {
    transactionSummary = new TransactionSummary();
    statement = new Statement(transactionSummary);
    myAccount = new Account(0, statement);
    date = new Date().toLocaleString().split(',')[0];

  });

  it ('a client makes a deposit of 1000', function() {
    myAccount.deposit(1000);
    expect(myAccount.balance).toEqual(1000)
  })

  it('the date of the deposit is recorded', function() {
    myAccount.deposit(1000);
    expect(myAccount.print_statement()).toContain(date);
  });

  it ('a client makes a deposit of 2000', function() {
    myAccount.deposit(1000);
    myAccount.deposit(2000);
    expect(myAccount.print_statement()).toContain(3000.00);
  })

  it ('a client makes a withdrawal of 500', function() {
    myAccount.deposit(1000);
    myAccount.deposit(2000);
    myAccount.withdraw(500);
    expect(myAccount.balance).toEqual(2500)
  })

  it('the date of the deposit is recorded', function() {
    myAccount.deposit(1000);
    myAccount.deposit(2000);
    myAccount.withdraw(500);
    expect(myAccount.print_statement()).toContain(date);
  });

  it('a client can print their bank statement', function() {
    expect(myAccount.print_statement()).toContain("date      || credit  || debit   || balance");
  });

  it('bank statements print both transaction amount and date', function() {
    amount = 1000000.00
    myAccount.deposit(amount);
    expect(myAccount.print_statement()).toContain(amount);
  });

});
