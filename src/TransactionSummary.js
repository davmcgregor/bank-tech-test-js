(function(exports) {

  function TransactionSummary(transactions = []) {
    this.transactions = transactions;
  }

  TransactionSummary.prototype = {
    pushTransaction: function(amount, balance){
      var transaction = new Transaction(amount, balance);
      this.transactions.push(transaction)
    },

  };

  exports.TransactionSummary = TransactionSummary;

})(this);
