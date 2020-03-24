(function(exports) {
  function Account(balance = 0, statement = new Statement()) {
    this.balance = balance;
    this.statement = statement;
  }

  Account.prototype = {
    print_statement: function(){
      return this.statement.display();
    },

    deposit: function(amount){
      this.balance += amount;
      this.statement.addTransaction(amount, this.balance);
    },

    withdraw: function(amount){
      this.balance -= amount;
      this.statement.addTransaction(-amount, this.balance);
    }
  }

  exports.Account = Account;
})(this);