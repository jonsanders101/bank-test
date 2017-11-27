var chai = require('chai');
var assert = chai.assert;
var Transaction = require('../src/transaction.js').Transaction;

describe('Transaction', function () {
  describe('#new', function () {
      it('initializes with date of transaction', function () {
        var transaction = new Transaction ();
        assert(transaction.date instanceof Date === true);
      });
      describe('given that a positive amount is passed', function () {
        it('initializes with credit value', function () {
          var transaction = new Transaction (7);
          assert(transaction.credit === 7);
        });
        it('initializes with zero debit value', function () {
          var transaction = new Transaction (7);
          assert(transaction.debit === 0);
        });
      });
    describe('given that a negative amount is passed', function () {
      it('initializes with debit value passed', function () {
        var transaction = new Transaction (-7);
        assert(transaction.debit === 7);
      });
      it('initializes with zero credit value', function () {
        var transaction = new Transaction (-7);
        assert(transaction.credit === 0);
      });
    });


  });
});
