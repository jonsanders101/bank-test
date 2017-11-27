(function(exports){
  function Account () {
    this.balance = 0;
    this.transactions = [];
  }

  Account.prototype = {
    getBalance: function () {
      return this.balance;
    },
    getTransactions: function () {
      return this.transactions;
    }
  };

  exports.Account = Account;
})(this);
