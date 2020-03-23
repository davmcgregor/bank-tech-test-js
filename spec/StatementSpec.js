'use strict'

describe ('Statement', function() {
  var statement;
  
  beforeEach(function() {
    statement = new Statement();
  });

  it('should be a defined object', function() {
    expect(statement instanceof(Statement)).toBe(true);
  });

});