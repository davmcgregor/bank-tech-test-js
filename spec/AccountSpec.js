'use strict';

describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account();
  })

  it('should be a defined object', function() {
    expect(account instanceof(Account)).toBe(true);
  })

  it('should instantiate with a balance of 0', function() {
    expect(account.balance).toBe(0);
  })

  it('should instantiate with an empty statement array', function() {
    expect(account.statement).toEqual([]);
  })

  describe('#print_statement', function() {
    it('prints the account statement', function() {
      expect(account.print_statement()).toEqual("date || credit || debit || balance\n");
    });
  });

  describe('#deposit', function() {
    it('should increase the account balance', function() {
      account.deposit(1);
      expect(account.balance).toEqual(1);
    });
  });
})