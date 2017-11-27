(function(exports){
  function Transaction (amount) {
    this.date = new Date();
    this.credit = amount > 0 ? amount : 0;
    this.debit = amount < 0 ? -amount : 0;
  }

  exports.Transaction = Transaction;
})(this);
