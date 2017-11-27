(function(exports){
  function Transaction (credit) {
    this.date = new Date();
    this.credit = credit;
  }

  exports.Transaction = Transaction;
})(this);
