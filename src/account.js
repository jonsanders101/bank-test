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
    },
    deposit: function (amount) {
      this.balance += amount;
    }
  };

  exports.Account = Account;
})(this);
