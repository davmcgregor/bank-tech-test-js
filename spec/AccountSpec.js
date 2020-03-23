'use strict';

describe('Account', function() {
  var account;
  var date;

  beforeEach(function() {
    account = new Account();
    date       = "23/03/2020";
  });

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
      expect(account.print_statement()).toEqual("date      || credit  || debit   || balance");
    });
  });

  describe('#deposit', function() {
    it('should increase the account balance', function() {
      account.deposit(1);
      expect(account.balance).toEqual(1);
    });

    it('should make an entry on the account statement', function() {
      account.deposit(1);
      expect(account.print_statement()).toEqual("date      || credit  || debit   || balance\n23/03/2020 || 1.00 ||         || 1.00");
    });

    it('should increase the account balance over multiple transations', function() {
      account.deposit(1);
      account.deposit(1);
      expect(account.print_statement()).toEqual("date      || credit  || debit   || balance\n23/03/2020 || 1.00 ||         || 2.00\n23/03/2020 || 1.00 ||         || 1.00");
    });
  });

  describe('#withdrawal', function() {
    it('should decrease the account balance', function() {
      account.deposit(1);
      account.deposit(1);
      account.withdraw(1);
      expect(account.balance).toEqual(1);
    });

    it('should make an entry on the account statement', function() {
      account.deposit(1);
      account.deposit(1);
      account.withdraw(1);
      expect(account.print_statement()).toEqual("date      || credit  || debit   || balance\n23/03/2020 ||         || 1.00 || 1.00\n23/03/2020 || 1.00 ||         || 2.00\n23/03/2020 || 1.00 ||         || 1.00");
    });

    it('should decrease the account balance over multiple transations', function() {
      account.deposit(3);
      account.withdraw(1);
      account.withdraw(1);
      expect(account.print_statement()).toEqual("date      || credit  || debit   || balance\n23/03/2020 ||         || 1.00 || 1.00\n23/03/2020 ||         || 1.00 || 2.00\n23/03/2020 || 3.00 ||         || 3.00");
    });
  });
});