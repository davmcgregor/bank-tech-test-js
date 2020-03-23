(function(exports) {
  function Account(balance = 0, statement = []) {
    this.balance = balance;
    this.statement = statement;
  }

  Account.prototype = {
    print_statement: function(){
      return "date || credit || debit || balance" + this.statement.join("\n");
    },

    deposit: function(amount, date){
      this.balance += amount;
      this.statement.push(`\n${date} || ${amount}.00 || || ${this.balance}.00`);
    }
  }

  exports.Account = Account;
})(this);