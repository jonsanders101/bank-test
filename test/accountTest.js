var chai = require('chai');
var assert = chai.assert;
var Account = require('../src/account.js').Account;

describe('Account', function () {
  it('initializes with a balance of 0', function() {
    var account = new Account();
    assert(account.getBalance() === 0);
  });
  it('initializes with empty list of transactions', function() {
    var account = new Account();
    assert(account.transactions.length === 0);
  });
});
