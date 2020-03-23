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
})