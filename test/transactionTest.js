var chai = require('chai');
var assert = chai.assert;
var Transaction = require('../src/transaction.js').Transaction;

describe('Transaction', function () {
  var transaction;
  describe('#new', function () {
      it('initializes with date of transaction', function () {
        transaction = new Transaction ();
        assert(transaction.date instanceof Date === true);
      });
      describe('given that a positive amount is passed', function () {
        beforeEach(function() {
          transaction = new Transaction (7);
        });
        it('initializes with credit value', function () {
          assert(transaction.credit === 7);
        });
        it('initializes with zero debit value', function () {
          assert(transaction.debit === 0);
        });
      });
    describe('given that a negative amount is passed', function () {
      beforeEach(function() {
        transaction = new Transaction (-7);
      });
      it('initializes with debit value passed', function () {
        assert(transaction.debit === 7);
      });
      it('initializes with zero credit value', function () {
        assert(transaction.credit === 0);
      });
    });
    it('initializes with balance value', function () {
      transaction = new Transaction (7, 700);
      assert(transaction.balance === 700);
    });
  });
});
