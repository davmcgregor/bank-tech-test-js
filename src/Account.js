(function(exports) {
  function Account(balance = 0, statement = []) {
    this.balance = balance;
    this.statement = statement;
  }

  Account.prototype = {
    print_statement: function(){
      return "date || credit || debit || balance\n";
    },

    deposit: function(amount){
      this.balance += amount;
    }
  }

  exports.Account = Account;
})(this);