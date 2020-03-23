(function(exports) {
  function Account(balance = 0, statement = []) {
    this.balance = balance;
    this.statement = statement;
  }

  Account.prototype = {
    print_statement: function(){
      return "date      || credit  || debit   || balance" + this.statement.reverse().join("");
    },

    deposit: function(amount){
      date = new Date().toLocaleString().split(',')[0]
      this.balance += amount;
      this.statement.push(`\n${date} || ${amount}.00 ||         || ${this.balance}.00`);
    },

    withdraw: function(amount){
      date = new Date().toLocaleString().split(',')[0]
      this.balance -= amount;
      this.statement.push(`\n${date} ||         || ${amount}.00 || ${this.balance}.00`);
    }
  }

  exports.Account = Account;
})(this);