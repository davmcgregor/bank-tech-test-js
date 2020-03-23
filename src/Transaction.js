(function(exports) {

  function Transaction(amount, balance, date = new Date()) {
    this.amount = amount;
    this.balance = balance;
    this.date = date;
  }

  exports.Transaction = Transaction;

})(this);
