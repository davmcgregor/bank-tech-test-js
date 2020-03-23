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
      expect(account.print_statement()).toEqual("date || credit || debit || balance");
    });
  });

  describe('#deposit', function() {
    it('should increase the account balance', function() {
      account.deposit(1, "01/01/2020");
      expect(account.balance).toEqual(1);
    });

    it('should make an entry on the account statement', function() {
      account.deposit(1, "01/01/2020");
      expect(account.print_statement()).toEqual("date || credit || debit || balance\n01/01/2020 || 1.00 || || 1.00");
    });
  });
})