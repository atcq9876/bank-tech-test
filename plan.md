# Plan

## Requirements
- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).


## Acceptance criteria
- Given a client makes a deposit of 1000 on 10-01-2023
- And a deposit of 2000 on 13-01-2023
- And a withdrawal of 500 on 14-01-2023
- When she prints her bank statement
- Then she would see:

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

(displayed more clearly below)
date        || credit   || debit    || balance
14/01/2023  ||          || 500.00   || 2500.00
13/01/2023  || 2000.00  ||          || 3000.00
10/01/2023  || 1000.00  ||          || 1000.00


## Assumptions
- Given that the acceptance criteria's example shows transactions only happening in chronological order, my program also assumes this is the case, i.e., if a transaction is added for 23/01/23, a transaction can not then be added for a date before this.


## Plan
Class:
- BankAccount

Functions:
- constructor
    - this.transactions = ''
    - this.balance = 0
    - this.statement = []

- depositFunds(date, amountDeposited)
    - check for date errors (data types, is correct format, date is after previous date, etc.)
    - check for amountDeposited errors (data types, positive 2dp float, etc.)
    - this.balance += amountDeposited
    - this.transactions = date, amountDeposited, this.balance += this.transactions

- withdrawFunds(date, amountWithdrawn)
    - check for date errors (data types, is correct format, date is after previous date, etc.)
    - check for amountWithdrawn errors (data types, positive 2dp float, etc.)
    - this.balance -= amountWithdrawn
    - this.transactions = date, amountWithdrawn, this.balance += this.transactions

- printBankStatement()
    - formatStatement()
    - return this.statement

~~- #createStatement()~~
    ~~- formatStatement()~~
    ~~- return this.statement~~

- #formatStatement()
    - this.statement = header + this.transactions
    ~~- this.statement = map through transactions; within each iteration add '\n' and '||' formatting and join sub-arrays into a string;~~
    ~~- this.statement.join (join the formatted array into a string)~~
    ~~- this.statement = "date || credit || debit || balance" + this.statement~~


## Tests
- depositFunds(amountDeposited, date)
    ~~- a valid deposit, then printBankStatement to check deposit amount and balance~~
    ~~- a different valid deposit, then printBankStatement to check deposit amount and balance~~
    ~~- two valid deposits, then printBankStatement to check deposit amounts and balance~~
    ~~- valid deposit with different date~~
    ~~- (refactor)~~
    ~~- throw error: invalid date (incorrect format)~~
    ~~- throw error: invalid date (date is before the date of the previous transaction)~~
    ~~- throw error: invalid date (incorrect data type)~~
        ~~- number~~
        ~~- nil/null~~
    ~~- (refactor)~~
    ~~- throw error: invalid deposit (amount is negative)~~
    ~~- throw error: invalid deposit (amount is 0)~~
    ~~- (refactor)~~
    ~~- throw error: invalid deposit (amount is not a 2dp float)~~
        ~~- int~~
        ~~- several dp floatr~~
        ~~- string~~
        ~~- nil/null~~
    ~~- (refactor)~~

- withdrawFunds(amountWithdrawn, date)
    ~~- deposit funds, then a valid withdrawal, then printBankStatement to check deposit and withdrawal amounts and balance~~
    ~~- deposit funds, then a a different valid withdrawal, then printBankStatement to check deposit and withdrawal amounts and balance~~
    ~~- deposit funds, then two valid withdrawals, then printBankStatement to check deposit and withdrawal amounts and balance~~
    ~~- (refactor)~~
    ~~- throw error: if trying to withdraw but account contains no funds~~
    ~~- throw error: if trying to withdraw more than the balance (balance > 0)~~
    ~~- (refactor)~~
    ~~- throw error: invalid withdrawal (amount is negative)~~
    ~~- throw error: invalid withdrawal (amount is 0)~~
    ~~- (refactor)~~
    ~~- throw error: invalid withdrawal (amount is not a 2dp float)~~
        ~~- int~~
        ~~- several dp float~~
    ~~- (refactor)~~
    ~~- throw error: invalid date (incorrect data type)~~
        ~~- number~~
        ~~- nil/null~~
    ~~- throw error: invalid date (date is before the date of the previous transaction)~~
    ~~- throw error: invalid date (incorrect format)~~
    ~~- (refactor)~~

- printBankStatement()
    ~~- (throw error / print a message saying 0 balance) before any deposits or withdrawals (i.e., empty statement)~~

- additional test
    ~~- edit tests and re-run jest to check if when deposited/withdrawn is a number to 0dp, 1dp, 2dp, 3dp, that this is correctly handled as a number to 2dp~~

- all features (multiple times)
    ~~- deposit(s), withdrawal(s), printBankStatement, deposit(s), withdrawal(s), printBankStatement again~~

~~- test it out in Node~~

## Additional todos
~~- Add any necessary comments (none if it's clear what all code does)~~
~~- Refactor tests to use a before each to create const bankAccount~~
~~- Spread code over more than one line if line is too long (where possible without harming readability)~~
~~- Write README.md~~


## Plan for second class
class BankStatement
constructor(bankAccount instance) {
    this.bankAccount = bankAccount instance
}

printStatement() {
    see printStatement() function originally in BankAccount
}

#formatStatement() {
    see #formatStatement() function originally in BankAccount
}

## Unit tests for BankStatement
Mock the transactions data that would usually be passed as the BankAccount instance/dependency or its transactions, e.g.:
- No transactions
- One deposit
- More than one deposit
- A deposit and one withdrawal
- A deposit and more than one withdrawal
- More than one deposit and more than one withdrawal

## Other changes after introducting second class
First test-drive the BankStatement class, then:

BankAccount unit tests
- Update tests to remove printStatement - could instead check bankAccount.transactions (and bankAccount.balance) to ensure that the deposits and withdrawals have been successfully stored within the class instance

BankAccount class
- In BankAccount, could either remove the printStatement() class, or edit it to create a new instance of BankAccount and pass it the BankAccount.transactions data as an argument/dependency
- If keeping a printStatement() function as outlined above, think about how this could be unit tested

Add integration tests
- Do this at the end