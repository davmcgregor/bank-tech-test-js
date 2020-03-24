'use strict';

describe('Account', function() {
  var account
  var statement

  beforeEach(function() {
    statement = new Statement();
    account = new Account(0, statement);
  });

  it('should be a defined object', function() {
    expect(account instanceof(Account)).toBe(true);
  });

  it('should have a balance property', function() {
    expect(account.balance).toBeDefined();
  });
  
  it('should instantiate with a balance of 0', function() {
    expect(account.balance).toBe(0);
  })

  it('should have a statement property', function() {
    expect(account.statement).toBeDefined();
  });

  it('should instantiate with the correct statement property', function() {
    expect(account.statement).toBe(statement);
  });


  describe('#print_statement', function() {

    it('should return a string', function() {
      expect(typeof account.print_statement()).toBe('string');
    });
  });

  describe('#deposit', function() {
    
    it('should increase the account balance', function() {
      account.deposit(1);
      expect(account.balance).toEqual(1);
    });

    it('should make an entry on the account statement', function() {
      spyOn(statement, 'addTransaction');
      account.deposit(1);
      expect(account.statement.addTransaction).toHaveBeenCalled();
    });

  });

  describe('#withdraw', function() {
    
    it('should decease the account balance', function() {
      account.deposit(2);
      account.withdraw(1);
      expect(account.balance).toEqual(1);
    });

    it('should make an entry on the account statement', function() {
      spyOn(statement, 'addTransaction');
      account.withdraw(1);
      expect(account.statement.addTransaction).toHaveBeenCalled();
    });
  });
});