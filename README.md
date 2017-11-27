Bank Tech Test
===============================

A simple bank with a command line interface with the following features:
* Make a withdrawal
* Make a deposit
* Receive an account statement

## Technologies Used

* JavaScript
* Mocha, Chai - testing

## Directory Structure

## Instructions

```
$ git clone git@github.com:jonsanders101/bank-test
$ cd bank-test
$ node
```
You should now be in the Node.js REPL. To begin executing bank functions:

```
> var Account = require('./src/account.js').Account
> var Transaction = require('./src/account.js').Account
> var account = new Account()
> account
{ balance: 0, transactions: [] }
> account.deposit(75)
> account
{ balance: 75, transactions: [] }
```
To quit the Node.js REPL:

```
> .exit
```

### Run Tests

```
$ cd bank-test
$ npm test
```

## Notes on approach

Here are a collection of notes which I will add to as I complete the task which give an indication to my approach.

I intend to write fuller documentation on completion, but you may follow this list of notes through my commit history to see a 'live' version of decisions as they're made.

* Account object will hold many transaction objects
* Currency will be handled on lowest denomination (e.g. pence) and will be formatted when the statement is printed
* '#deposit' and '#withdraw' methods will accept positive integer
