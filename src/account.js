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
    deposit: function (amount, transaction) {
      if (amount <= 0) throw 'Deposit amount must be a positive number in pence';
      this.transactions.push(new transaction(amount));
      this.balance += amount;
    },
    withdraw: function (amount) {
      if (amount <= 0) throw 'Deposit amount must be a positive number in pence';
      this.balance -= amount;
    }
  };

  exports.Account = Account;
})(this);
