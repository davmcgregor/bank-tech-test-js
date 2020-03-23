(function(exports) {

  function TransactionSummary(summary = []) {
    this.summary = summary;
  }

  TransactionSummary.prototype = {
    addTransaction: function(amount, balance){
      var transaction = new Transaction(amount, balance);
      this.transaction.push(transaction)
    }
  };

  exports.TransactionSummary = TransactionSummary;

})(this);
