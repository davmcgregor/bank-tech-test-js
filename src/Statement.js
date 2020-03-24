(function(exports) {

  function Statement(summary = new TransactionSummary()) {
    this.summary = summary
  }

  Statement.prototype = {
    addTransaction: function(amount, balance){
      this.summary.pushTransaction(amount, balance)
    },

    display: function(){
      var display = "date      || credit  || debit   || balance" + '\n';
      this.summary.transactions.reverse().forEach(function(element) {
        display += (element.date).toLocaleString().split(',')[0];
        display += ' || ';
        if (element.amount > 0) {
          display += element.amount.toFixed(2);
          display += ' || ';
          display += '        ';
          display += ' || ';
        }
        if (element.amount < 0) {
          display += '        ';
          display += ' || ';
          display += Math.abs(element.amount).toFixed(2);
          display += ' || ';
        }
        display += element.balance.toFixed(2);
        display += '\n';
      });
      return display;
    }
  };

  exports.Statement = Statement;

})(this);