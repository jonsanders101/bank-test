(function(exports){
  function Transaction (amount, balance) {
    this.date = new Date();
    this.credit = amount > 0 ? amount : 0;
    this.debit = amount < 0 ? -amount : 0;
    this.balance = balance;
  }

  exports.Transaction = Transaction;
})(this);
