var chai = require('chai');
var assert = chai.assert;
var Account = require('../src/account.js').Account;

describe('Account', function () {
  var account;
  var transactionMock = function () {};

  beforeEach(function() {
    account = new Account();
  });

  describe('#new', function () {
    it('initializes with a balance of 0', function() {
      assert(account.getBalance() === 0);
    });
    it('initializes with empty list of transactions', function() {
      assert(account.getTransactions().length === 0);
    });
  });

  describe('#deposit', function () {
    it('increases account balance by given amount', function () {
      account.deposit(13, transactionMock);
      account.deposit(7, transactionMock);
      assert(account.getBalance() === 20);
    });
    it('raises error if given negative integer', function () {
      assert.throws(() => { account.deposit(-1, transactionMock); },'Deposit amount must be a positive number in pence');
    });
    it('raises error if given zero', function () {
      assert.throws(() => { account.deposit(0, transactionMock); },'Deposit amount must be a positive number in pence');
    });
    it('adds new Transaction object to transactions list', function () {
      transactionMock = function (amount, balance) {
        return { credit: amount,
                balance: balance };
      };

      function lastTransaction() {
        return account.getTransactions()[account.getTransactions().length - 1];
      }

      account.deposit(7, transactionMock);
      assert(lastTransaction().credit === 7);
      assert(lastTransaction().balance === 7);
    });
  });
  describe('#withdraw', function () {
    it('descreases account balance by given amount', function () {
      account.deposit(13, transactionMock);
      account.withdraw(7, transactionMock);
      assert(account.getBalance() === 6);
    });
    it('raises error if given negative integer', function () {
      assert.throws(() => { account.deposit(-1, transactionMock); },'Deposit amount must be a positive number in pence');
    });
    it('raises error if given zero', function () {
      assert.throws(() => { account.deposit(0, transactionMock); },'Deposit amount must be a positive number in pence');
    });
    it('adds new Transaction object to transactions list', function () {
      transactionMock = function (amount, balance) {
        return { debit: -amount,
                balance: balance };
      };

      function lastTransaction() {
        return account.getTransactions()[account.getTransactions().length - 1];
      }
      account.deposit(20, transactionMock);
      account.withdraw(3, transactionMock);
      assert(lastTransaction().debit === 3);
      assert(lastTransaction().balance === 17);
    });
  });
  describe('#printStatement', function () {
    it('returns string of previous transactions', function () {
      account.transactions = [{date: new Date("2012-01-10"), credit: 100000, debit: 0, balance: 100000},
                              {date: new Date("2012-01-13"), credit: 200000, debit: 0, balance: 300000},
                              {date: new Date("2012-01-14"), credit: 0, debit: 50000, balance: 250000}
                              ];

      let statement = "date || credit || debit || balance\n10/01/2012 || £1,000.00 || || £1,000.00\n13/01/2012 || £2,000.00 || || £3,000.00\n14/01/2012 || || £500.00 || £2,500.00\n";
      console.log(account.printStatement())
      assert(account.printStatement() === statement);
    });
  })
});
