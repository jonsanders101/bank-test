var chai = require('chai');
var assert = chai.assert;
var Account = require('../src/account.js').Account;

describe('Account', function () {
  var account;

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
    it('#increases account balance by given amount', function () {
      account.deposit(13);
      account.deposit(7);
      assert(account.getBalance() === 20);
    });
  });
});
