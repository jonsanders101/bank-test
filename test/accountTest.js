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
      assert.throws(() => { account.deposit(-1); },'Deposit amount must be a positive number in pence');
    });
    it('raises error if given zero', function () {
      assert.throws(() => { account.deposit(0); },'Deposit amount must be a positive number in pence');
    });
    it('adds new Transaction object to transactions list', function () {
      transactionMock = function (credit) {
        return { credit: credit };
      };
      account.deposit(7, transactionMock);
      assert(account.getTransactions()[account.getTransactions().length - 1].credit === 7);
    });
  });
  describe('#withdraw', function () {
    it('descreases account balance by given amount', function () {
      account.deposit(13, transactionMock);
      account.withdraw(7);
      assert(account.getBalance() === 6);
    });
    it('raises error if given negative integer', function () {
      assert.throws(() => { account.deposit(-1); },'Deposit amount must be a positive number in pence');
    });
    it('raises error if given zero', function () {
      assert.throws(() => { account.deposit(0); },'Deposit amount must be a positive number in pence');
    });
  });
});
