(function(exports){
  function Account () {
    this.balance = 0;
    this.transactions = [];
  }

  Account.prototype.getBalance = function () {
    return this.balance;
  };

  exports.Account = Account;
})(this);
