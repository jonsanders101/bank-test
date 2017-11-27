(function(exports){
  function Account (transaction = Transaction) {
    this.balance = 0;
    this.transactions = [];
    this.transaction = transaction;
  }

  Account.prototype = {
    getBalance: function () {
      return this.balance;
    },
    getTransactions: function () {
      return this.transactions;
    },
    deposit: function (amount) {
      if (amount <= 0) throw 'Deposit amount must be a positive number in pence';
      this.balance += amount;
      this.transactions.push(new this.transaction(amount, this.getBalance()));
    },
    withdraw: function (amount) {
      if (amount <= 0) throw 'Deposit amount must be a positive number in pence';
      this.balance -= amount;
      this.transactions.push(new this.transaction(-amount, this.getBalance()));
    },
    printStatement: function () {
      var statement = "date || credit || debit || balance\n";
      this.transactions.reverse().forEach(function(transaction) {
        statement += _formatDate(transaction.date) + " ||"+ _formatMoney(transaction.credit) + " ||" + _formatMoney(transaction.debit) + " ||" + _formatMoney(transaction.balance) + "\n";
      });
      return statement;
    }
  };

  var _formatDate = function (date) {
    return date.toLocaleString().slice(0, 10);
  };

  var _formatMoney = function (money) {

    var currencyFormatter = new Intl.NumberFormat('en-US', {
	     style: 'currency',
       currency: 'GBP' });

    return (money === 0) ? "" : " " + currencyFormatter.format(money/100);
  };

  exports.Account = Account;
})(this);
