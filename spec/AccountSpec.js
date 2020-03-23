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

    it('should increase the account balance over multiple transations', function() {
      account.deposit(1, "01/01/2020");
      account.deposit(1, "02/01/2020");
      expect(account.print_statement()).toEqual("date || credit || debit || balance\n02/01/2020 || 1.00 || || 2.00\n01/01/2020 || 1.00 || || 1.00");
    });
  });

  describe('#withdrawal', function() {
    it('should decrease the account balance', function() {
      account.deposit(1, "01/01/2020");
      account.deposit(1, "02/01/2020");
      account.withdraw(1, "03/01/2020");
      expect(account.balance).toEqual(1);
    });

    it('should make an entry on the account statement', function() {
      account.deposit(1, "01/01/2020");
      account.deposit(1, "02/01/2020");
      account.withdraw(1, "03/01/2020");
      expect(account.print_statement()).toEqual("date || credit || debit || balance\n03/01/2020 || || 1.00 || 1.00\n02/01/2020 || 1.00 || || 2.00\n01/01/2020 || 1.00 || || 1.00");
    });

    it('should decrease the account balance over multiple transations', function() {
      account.deposit(3, "01/01/2020");
      account.withdraw(1, "02/01/2020");
      account.withdraw(1, "03/01/2020");
      expect(account.print_statement()).toEqual("date || credit || debit || balance\n03/01/2020 || || 1.00 || 1.00\n02/01/2020 || || 1.00 || 2.00\n01/01/2020 || 3.00 || || 3.00");
    });
  });

  it('should take in acceptance criteria', function() {
    account.deposit(1000, "10/01/2012");
    account.deposit(2000, "13/01/2012");
    account.withdraw(500, "14/01/2012");
    expect(account.print_statement()).toEqual("date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00");
  });

});