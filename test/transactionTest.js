var chai = require('chai');
var assert = chai.assert;
var Transaction = require('../src/transaction.js').Transaction;

describe('Transaction', function () {
  describe('#new', function () {
      it('initializes with date of transaction', function () {
        var transaction = new Transaction ();
        assert(transaction.date instanceof Date === true);
      });
  });
});
