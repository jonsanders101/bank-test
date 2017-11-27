var chai = require('chai');
var assert = chai.assert;
var Transaction = require('../src/transaction.js').Transaction;

describe('Transaction', function () {
  describe('#new', function () {
      it('initializes with date of transaction', function () {
        var transaction = new Transaction ();
        assert(transaction.date instanceof Date === true);
      });
      it('initializes with credit value passed', function () {
        var transaction = new Transaction (7);
        assert(transaction.credit === 7);
      });

  });
});
