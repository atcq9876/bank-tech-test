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
- Given that the acceptance criteria's example shows transactions only happening in chronological order, my program also assumes this is the case, i.e., if a transaction is added for 23/01/23, a transaction can not then be added for a date before this.


# Plan
Class:
- BankAccount

Functions:
- constructor
    - this.transactions = []
    - this.balance = 0
    - this.statement = []

- depositFunds(date, amountDeposited)
    - check for date errors (data types, is correct format, date is after previous date, etc.)
    - check for amountDeposited errors (data types, positive number, etc.)
    - this.balance += amountDeposited
    - this.transactions.push([date], [amountDeposited], [this.balance])

- withdrawFunds(date, amountWithdrawn)
    - check for date errors (data types, is correct format, date is after previous date, etc.)
    - check for amountWithdrawn errors (data types, positive number, etc.)
    - this.balance -= amountWithdrawn
    - this.transactions.push([date] [amountWithdrawn], [this.balance])

- printBankStatement()
    - createStatement()
    - return this.statement

- #createStatement()
    - formatStatement()
    - return this.statement

- #formatStatement()
    - this.statement = map through transactions; within each iteration add '\n' and '||' formatting and join sub-arrays into a string;
    - this.statement.join (join the formatted array into a string)
    - this.statement = "date || credit || debit || balance" + this.statement


