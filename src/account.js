(function(exports){
  function Account () {
    this.balance = 0;
  }

  Account.prototype.getBalance = function () {
    return this.balance;
  };

  exports.Account = Account;
})(this);
