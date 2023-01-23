# Requirements
- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).


# Acceptance criteria
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


# Assumptions
- Given that the acceptance criteria's example does not have more than one transaction per day, and that time is not included as a variable, this program will assume that there will be a maximum of one transaction per day in order to avoid problems related to sorting (e.g., if a withdrawal and deposit happen on the same day, but it is not clear which happened first, then carrying out the withdrawal first could result in an insufficient funds error).


# Plan
Class:
- BankAccount

Functions:
- constructor
    - this.transactions = []
    - this.statement = []

- depositFunds(date, amountDeposited)
    - check for errors
    - this.transactions.push([date], [amountDeposited])

- withdrawFunds(date, amountWithdrawn)
    - check for errors
    - this.transactions.push([date] [amountWithdrawn])

- printBankStatement()
    - createStatement()
    - return this.statement

- #createStatement()
    - sortTransactionsByDate()
    - calculateBalances()
    - formatTransactions()
    - formatStatement()
    - return this.statement

- #sortTransactionsByDate()
  - this.statement = sort this.transactions by date (might need to change date format to yyyy/mm/dd temporarily to do this)

- #calculateBalances()
  - this.statement = map through this.statement, calculating balances for each transaction, push this balance to each sub-array

- #formatTransactions()
  - this.statement = map through sorted transactions; within iteration: add '\n' and '||' formatting;
  - this.statement.join (join the formatted array into a string)

- #formatStatement()
  - this.statement = "date || credit || debit || balance" + this.statement;
