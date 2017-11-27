var chai = require('chai');
var assert = chai.assert;
var Account = require('../src/account.js').Account;

describe('Account', function () {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it('initializes with a balance of 0', function() {
    assert(account.getBalance() === 0);
  });
  it('initializes with empty list of transactions', function() {
    assert(account.getTransactions().length === 0);
  });

  describe('#deposit', function () {
    it('#increases account balance', function () {
      account.deposit(13);
      assert(account.getBalance() === 13);
    });
  });
});
